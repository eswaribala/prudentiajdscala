const expect = require('chai').expect;
const request = require('request');
const sinon = require('sinon');
const index = require('../../src/spy/index');
//spying
describe('test getUserById', () => {
    let requestSpy;
    before(() => {
        requestSpy = sinon.spy(request, 'get');
    });

    after(() => {
        request.get.restore();
    });

    it('should getUserById', (done) => {
        //this.timeout(5000)
        index.getUserById('https://jsonplaceholder.typicode.com/users/1').then((user) => {
             console.log(user)
          expect(requestSpy.calledOnce).to.be.true
          //expect(requestSpy.calledWith(10))
        //  expect(requestSpy.args[0][0]).to.equal("https://jsonplaceholder.typicode223.com/users/1");
            expect(user).to.have.property('name');
            done();
        });

    });
});
