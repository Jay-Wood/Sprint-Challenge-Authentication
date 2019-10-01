const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Users = require('../users/userModel.js');
const secrets = require("../secrets.js");


module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("token in midware: ", token)

  if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: "You ain't got no web token, dude!" })
      } else {
        req.user = {username: decodedToken.username}
        next();
      }

    })
  } else {
    res.status(401).json({ message: 'No credentials provided' });
  }  
};
