const User = require('../modules/Users');
const jwt = require('jsonwebtoken');


const userRegister = async(request, response) => {
    const {username,email} = request.body;
    try {
        const userEmail = await User.findOne({email});
        if(userEmail){
            return response.status(400).json(("Email already taken"));
        }
        const newUser = new User({
            username,
            email
        });
        await newUser.save();
        response.status(201).json({message: "User registerd successfully"});
        console.log("Registred");
    } catch (error) {
        console.log(error);
        response.status(500).json(({error: "Internal Server error"}));
    }

}

module.exports = {userRegister}