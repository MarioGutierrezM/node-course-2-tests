const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        let res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });
    
    it('should square a number', () => {
        let res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
    });
    
    it('should expect some values', () => {
        let obj = { name: 'mario' };
        expect(12).toNotBe(4);
        expect(obj).toEqual(obj);
        expect([1,2,3]).toInclude(2);
    });
    
    it('should verify first and last names are set',() => {
        let user = { firstName: 'mario', lastName: 'gutierrez' };
        let res = utils.setName({}, 'mario gutierrez');
        expect(res).toEqual(user).toBeA('object');
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
});
