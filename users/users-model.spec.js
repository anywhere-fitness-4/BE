const request = require('supertest');
const server = require('../api/server');
const Users = require('./users-model');
const db = require('../data/dbConfig');

describe('users and classes', function() {

    describe('GET /users', function() {

        it ('user route working', function() {
            return request(server)
                .get('/api/users')
                .then(res => {
                    expect(res.body)
                });
        });

        it ('should return 500 because no credentials provided', function() {
            return request(server)
                .get('/api/users')
                .then(res => {
                    expect(res.status).toBe(500)
                });
        });

    }); // end users GET
    
    describe('GET /classes', function() {

        it ('classes route working', function() {
            return request(server)
                .get('/api/classes')
                .then(res => {
                    expect(res.body)
                });
        });

        it ('should return 500 because no credentials provided', function() {
            return request(server)
                .get('/api/classes')
                .then(res => {
                    expect(res.status).toBe(500)
                });
        });

    }); // end classes GET

}); // end users and classes