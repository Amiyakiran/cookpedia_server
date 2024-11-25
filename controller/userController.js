const users = require("../model/usersModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//register


exports.registerController = async(req, res)=>{
    const {username , email , password} = req.body 
    console.log(username , email , password);
    

    try {

        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json('Account already exist . Please Login')
        }
        else{
            const encryptedPassword = await bcrypt.hash(password,10)
            console.log(encryptedPassword);
            
            const newUser = new users({
                username,
                email,
                password:encryptedPassword
               
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

//login

exports.loginController = async(req, res)=>{
    console.log('inside login controller');
    const {email , password} = req.body 
    try {
        const existingUser = await users.findOne({email})

        if(existingUser){
            let isMatch = await bcrypt.compare(password, existingUser.password)
            if(existingUser.password== password || isMatch ){
                const token = jwt.sign({userId:existingUser._id}, process.env.JWT_PASSWORD)
                res.status(200).json({existingUser, token})
            }
            else{
                res.status(404).json('INVALID Password')
            }
        }
        else{
            res.status(404).json('Invalid Email')
        }
    } catch (error) {
        res.status(401).json(error)
    }
    
}