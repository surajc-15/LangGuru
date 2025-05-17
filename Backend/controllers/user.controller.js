import User from "../model/User.model.js";

export const registerUser = async (req, res) => {
    try {
        const { userId, userName, email, profileImage } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        console.log(req);

       
        const newUser = new User({
            userId,
            userName,
            email,
            profileImage
        });

       
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};