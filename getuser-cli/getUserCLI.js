#! /usr/bin/env node
require("dotenv").config();
const program = require("commander");
const mongoose = require("mongoose");

//Connect to Mongo
const db = mongoose.connect(process.env.DATABASE);

//create user schema

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
});

const User = new mongoose.model("User", userSchema);

const listUsers = () => {
  User.find().then((Users) => {
    console.log(Users);
    console.log(`${Users.length} Users`);
    mongoose.disconnect();
  });
};

//Program

//List Command
program
  .command("list")
  .alias("l")
  .description("List all users")
  .action(() => listUsers());

program.parse(process.argv);
