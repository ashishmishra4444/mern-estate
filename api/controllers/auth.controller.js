import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    // res.status(500).json(error.message);
    next(error);

    //imagine no error and we want to create an error then:
    // next(errorHandler(550, "error from the function"));
  }
};

//sign in
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        // res.status(404).json("User not found!");
        next(errorHandler(404, "User not found!"));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword)
        // res.status(401).json("Invalid password or wrong credentials!");
        return next(errorHandler(401, "Wrong credentials!"));
  
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
  
      //we dont want to send the hashed password to the user also so we destructer the password and the rest
      // const { password: pass, ...userInfo } = validUser.toObject();
      //or we can write
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      // res.status(500).json(error.message);
      next(error);
    }
  };