const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authenticate = require('../auth/authenticate-middleware');

// must decide how to design (users OR have 2 types of users in 2 different tables)
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const instructorsRouter = require('../users/instructors/instructors-router');
const clientsRouter = require('../users/clients/clients-router');
const classesRouter = require('../classes/classes-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// must decide how to design (users OR have 2 types of users in 2 different tables)
server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);
server.use('/api/instructors', authenticate, instructorsRouter);
server.use('/api/clients', authenticate, clientsRouter);
server.use('/api/classes', authenticate, classesRouter);

server.get('/', (req, res) => {
    res.status(200)
        .json({ message: 'Welcome to the Anywhere Fitness API 💪' })
});

module.exports = server;
