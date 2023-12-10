const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyparser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51KpfRNIcxD4GreRx3nb0PyUVP1itJvwrZoJ1I5gqt5GHghB6CoARTmc46JRVg5kpUy4dLTVPogEUU31cqLTO4hSJ00WOKdstt0"
);
const uuid = require("uuid").v4;
const requireLogin = require("./middleware/requireLogin");

const User = require("./models/userSchema");
const Feedback = require("./models/feedbackSchema");
const app = express();

// This method is used to get data and cookies from frontend
// Data must be parsed before routes
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Representing Logged In UserName on Home Page
app.get("/home", requireLogin, (req, res) => {
  // console.log(req.user.username);
  res.send({
    message:
      "User is logged in and authorized with jwt token, which is generated after successful login.",
    username: req.user.username,
    userType: req.user.userType,
    email: req.user.email,
    firstname: req.user.firstname,
    lastname: req.user.lastname
  });
});

// User Register
app.post("/register", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      phonenumber,
      userType,
    } = req.body;
    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // const email = req.body.email;
    // const username = req.body.username;
    // const password = req.body.password;
    // const phonenumber = req.body.phonenumber;
    // const userType = req.body.userType;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !username ||
      !password ||
      !phonenumber ||
      !userType
    ) {
      return res.status(422).json({ error: "please insert all the fields" });
    }

    const existedUsername = await User.findOne({ username });
    if (existedUsername !== null) {
      return res.status(422).json({ error: "This UserName is already taken" });
      // throw new Error ('User Name already exist in the system')
    }

    const existedEmail = await User.findOne({ email });
    if (existedEmail !== null) {
      return res
        .status(422)
        .json({ error: "user already exists with that Email" });
      // throw new Error ('Email ID already exist in the system')
    }

    const createUser = new User({
      firstname,
      lastname,
      email,
      username,
      password,
      phonenumber,
      userType,
    });

    // Save method is used to insert User in DB
    // but password will be hashed before saving or inserting it
    const created = await createUser.save();
    console.log(created);
    return res.status(200).json({ message: "User is successfully Registered" });
  } catch (err) {
    // console.log("here",err.message)
    return res.status(400).send({ error: err.message });
  }
});

// User Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // const username = req.body.username;
    // const password = req.body.password;

    if (!username || !password) {
      return res.status(422).send("please add username or password");
      // return res.status(422).json({error:"please add username or password"})
    }

    // find user if it's existing in DB
    const user = await User.findOne({ username: username });
    if (user) {
      // if user exist, it verify password
      const isMatch = await bcryptjs.compare(password, user.password);

      if (isMatch) {
        // if password verifies correctly, it will generate token that is defined in user Schema

        let generatedToken = jwt.sign(
          { _id: user._id },
          process.env.JWT_SECRET_KEY
        );
        // res.json({ generatedToken }); //token generated successfully

        // const token = await user.generateToken();
        // res.cookie("jwt", token, {
        //     expires: new Date(Date.now() + 86400000),
        //     httpOnly: true
        // })
        return res.status(200).json({
          message: "User Logged In Successfully",
          token: generatedToken,
        });
      } else {
        return res.status(400).json({ error: "Invalid Credentials" }); // Password is Wrong
      }
    } else {
      return res.status(400).json({ error: "Invalid Credentials" }); // Username is wrong
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// User Feedback
app.post("/customerfeedback", async (req, res) => {
  try {
    const { name, subject, email, text } = req.body;

    // find user if it's existing in DB
    const user = await User.findOne({ email });
    // console.log(req.user.email);
    // console.log(req.user.userType);

    console.log(user);

    const createFeedback = new Feedback({
      name,
      subject,
      email,
      text,
    });

    const created = await createFeedback.save();
    console.log(created);
    return res
      .status(200)
      .json({ message: `Client's Feedback is submitted successfully` });

  } catch (err) {
    // console.log("here",err.message)
    return res.status(400).send({ error: err.message });
  }
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

// MongoDB Connection
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connection Successful");
  })
  .catch((err) => {
    console.log("Mongodb connection Failed", err);
    process.exit();
  });

// Configuration of Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT} \n   http://localhost:${PORT}`);
});
