const Manager = require('../classes/Manager');
const { TestScheduler } = require('jest');


test ('fetches office number' , () => {

const manager = new Manager ('Jacob',1,'testemail@gmail.com',1);
expect(manager.officeNumber).toEqual(1);
})

test('gets role', () => {
    const manager = new Manager ('Jacob',1,'testemail@gmail.com',1);
    expect(manager.getRole()).toEqual('Manager');
})