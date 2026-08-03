import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Activity } from "../model/activityModel.js";

// display the data : GET
export const getAllUsers = async (req, res) => {
  try {
    let result = await User.find({}, { password: 0 });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

// Search user by first name : GET
export const getUsersByName = async (req, res) => {
  try {

    const users = await User.find(
      {
        fname: req.params.fname,
      },
      {
        password: 0,
      }
    );

    res.json(users);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};
 
// search the data with the id : GET
export const getUserById = async (req, res) => {
  try {

    const user = await User.findById(req.params.id, {
      password: 0,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// save the data : POST
export const saveData = async (req, res) => {
  try {
    // Check if email already exists
    let existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.send("Email already exists");
    }

    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    let newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      isActive: req.body.isActive,
    });

    await newUser.save();

    await Activity.create({
      type: "add",
      message: `${newUser.fname} ${newUser.lname} was added`,
    });

    res.send(newUser);
  } catch (err) {
    res.send(err);
  }
};

// login 
export const loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.send("Invalid Password");
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Save login activity
    await Activity.create({
      type: "login",
      message: `${user.fname} ${user.lname} logged in`,
    });

    res.send({
      message: "Login Successful",
      token,
      user: {
        _id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        phone: user.phone,
        isActive: user.isActive,
      },
    });

  } catch (err) {
    res.send(err);
  }
};

// delete the data : DELETE
export const deleteData = async (req, res) => {
  try {

    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).send("User not found");
    }

    await Activity.create({
      type: "delete",
      message: `${deletedUser.fname} ${deletedUser.lname} was deleted`,
    });

    res.send(deletedUser);

  } catch (err) {
    res.send(err);
  }
};

// edit the data : PUT
export const updateData = async (req, res) => {
  try {
    let updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        isActive: req.body.isActive,
      },
      {
        returnDocument: "after",
      }
    );

    await Activity.create({
      type: "edit",
      message: `${updatedUser.fname} ${updatedUser.lname} was updated`,
    });

    res.send(updatedUser);
  } catch (err) {
    res.send(err);
  }
};

// recent activites
export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.send(activities);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};