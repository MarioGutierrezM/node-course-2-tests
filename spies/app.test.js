const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('APP', () => {

    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('mario', 23);
        expect(spy).toHaveBeenCalled('mario', 23);
    });

    it('should call saveUser with user object', () => {
        const email = 'mgu@itexico.net';
        const pass = '1234';

        app.handleSingup(email, pass);
        expect(db.saveUser).toHaveBeenCalledWith({ email, pass });
    });
});