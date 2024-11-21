const users = require("../model/usersModel")
const bcrypt = require('bcrypt')


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