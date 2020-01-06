const request = require('supertest');
const server = require('./server');

describe('server.js', function() {

    describe('GET /', function() {
        
        it ('should return a 200 OK', function() {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                });
        });

        it ('should return Welcome to the Anywhere Fitness API 💪', function() {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body.message).toBe('Welcome to the Anywhere Fitness API 💪')
                });
        });
    
    }); // end Get

    describe('/Register', function() {

        it ('is a json object', function() {
            return request(server)
                .post('/api/auth/register')
                .send({ username: 'vinny', password: '123'})
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                });
        });

    }); // end register
    
    describe('/Login', function() {

        it ('should return a 200 OK', function() {
            return request(server)
                .post('/api/auth/login')
                .send({ username: 'vinny', password: '123'})
                .then(res => {
                    expect(res.status).toBe(200)
                });
        });
        
        it ('is a json object', function() {
            return request(server)
                .post('/api/auth/login')
                .send({ username: 'vinny', password: '123'})
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                });
        });

    }); // end login

}); // end server.js