const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name could not be empty"],
    lowercase: true,
  },
  subject: {
    type: String,
    required: [true, "Subject could not be empty"],
    lowercase: true,
  },
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Enter a valid email",
    },
  },
  text: {
    type: String,
    required: [true, "Text could not be empty"],
    lowercase: true,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
