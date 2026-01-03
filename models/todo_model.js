const mongoose = require("mongoose");
const UserModel = require("../models/user_model");
const {Schema} = mongoose;
const todoSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: UserModel.modelName,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
