const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First Name could not be empty"],
    lowercase: true,
  },
  lastname: {
    type: String,
    required: [true, "Last Name could not be empty"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Email ID could not be empty"],
    lowercase: true,
    validate: {
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Enter a valid email",
    },
  },
  username: {
    type: String,
    required: [true, "User Name could not be empty"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password could not be empty"],
    minlength: [8, "Password must be at least 8 characters or longer"],
  },
  userType: {
    type: String,
    default: "client",
    enum: ["client", "coach"],
  },
  phonenumber: {
    type: Number,
    required: [true, "Phone Number could not be empty"],
    validate: {
      validator: function (v) {
        return /^([0-9]{10}$)/.test(v);
      },
      message: (props) => `${props.value} must have 10 digits!!!!!!`,
    },
  },
  // tokens: [
  //     {
  //         token: {
  //             type: String,
  //             required: true
  //         }
  //     }
  // ]
});

// Hashing password to secure
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
});

// Generate Tokens to verify client
// clientSchema.methods.generateToken = async function () {
//   try {
//     let generatedToken = jwt.sign(
//       { _id: this._id },
//       process.env.JWT_SECRET_KEY
//     );
//     this.tokens = this.tokens.concat({ token: generatedToken });
//     await this.save();
//     return generatedToken;
//   } catch (error) {
//     console.log(error);
//   }
// };

// Creating collection model (clients) into MongoDB Database

const Clients = mongoose.model("Client", userSchema);
module.exports = Clients;
