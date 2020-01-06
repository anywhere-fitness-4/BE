const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authenticate = require('../auth/authenticate-middleware');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const classesRouter = require('../classes/classes-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);
server.use('/api/classes', classesRouter);

server.get('/', (req, res) => {
    res.status(200)
        .json({ message: 'Welcome to the Anywhere Fitness API 💪' })
});

module.exports = server;
