import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for User Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesnt exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Route for User Registeration

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user already exist or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exist" });
        }
        // Validating email format and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter Valid Email" });
        }
        if (password.legth < 8) {
            return res.json({
                success: false,
                message: "Please Cant be less Than 8 Characters",
            });
        }

        //hasing the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const neUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });
        const user = await neUser.save();

        const token = createToken(user._id);
        res.json({ success: true, token });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Route for Admin Login

const adminLogin = async (req, res) => { 
    try {
        const {email,password} = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        } else{
            res.json({success:false,message:"Invalid Credentials"})
        }         

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

};

export { loginUser, registerUser, adminLogin };
