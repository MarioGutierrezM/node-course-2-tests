const supertest = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {

    describe('GET: /', () => {
        it('should return error msg', (done) => {
            supertest(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                });
            })
            .end(done);
        });
    });

    describe('GET: /users', () => {
        it('should return user list', (done) => {
            supertest(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'mario', age: 23
                });
            })
            .end(done);
        });
    });
});