const router = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrets = require("../secrets.js");
const Users = require("../users/userModel.js");
const validateUser = require("./authenticate-middleware.js");

router.post('/register', (req, res) => {
  let user = req.body;
  let hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  const token = generateToken(user);
  
  Users.add(user)
    .then(id => {
      res.status(201).json({ message: `User registered: ${user.username} has an id of ${id.id}`})  
    })
    .catch(error => {
      res.status(500).json( {message: `Error adding new user: ${error}`} );
    });
});

router.post('/login', (req, res) => {
  // implement login
});

function generateToken(user) {
  const payload = {
    username: user.username,
  }

  const options = {
    expiresIn: "1d"
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
