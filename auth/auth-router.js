//       ***** this is built out assuming there will be a single users table *****
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//       ***** this is built out assuming there will be a single users table *****
const Users = require('../users/users-model');

// POST - register    >>    Test
router.post('/register', (req, res) => {
  let username = req.body;
  const hash = bcrypt.hashSync(username.password, 8);
  username.password = hash;

  Users.add(username)
    .then(user => {
      res.status(201)
        .json({ user, message: `Thank you for registering` })
    })
    .catch(err => {
      console.log('Error with POST register', err)
      res.status(500)
        .json({ message: 'Could not register user' })
    })
});

// POST - login    >>    Test
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.getBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200)
          .json({ token, message: `Welcome ${user.username}` })
      } else {
        res.status(401)
          .json({ message: 'Invalid credentials' })
      }
    })
    .catch(err => {
      console.log('Error with POST login', err)
      res.status(500)
        .json({ message: 'Could not login user' })
    })
});

function signToken(user) {
  const payload = {
    username: user.username,
  };

  const secret = process.env.JWT_SECRET || 'is it secret, is it safe';

  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secret, options);
};

module.exports = router;
//       ***** this is built out assuming there will be a single users table *****