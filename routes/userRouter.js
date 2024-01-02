const express=require("express");
const { addNewUser, loginUser, retriveUsersById, retriveAllUsers } = require("../controllers/userController");
const userRouter=express.Router()

userRouter.get("/",retriveAllUsers);

userRouter.get("/:id",retriveUsersById); 

userRouter.post("/register", addNewUser);

userRouter.post("/login", loginUser);

module.exports = userRouter;