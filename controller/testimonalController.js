const testimonials = require("../model/testimonyModel")



//add testimonial
exports.addTestimonialsController = async(req, res)=>{
    console.log('inside add');
    
    console.log(req.body);
    
    const {name, email, message} = req.body 

    try {
        const newMessage = new testimonials({
            name,email,message
        })
        await newMessage.save()
        res.status(200).json(newMessage)
    } catch (error) {
        res.status(401).json(401)
    }
}