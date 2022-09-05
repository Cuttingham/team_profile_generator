const { TestScheduler } = require('jest');
const Intern = require('../classes/Intern');

test ('intern object created ',() => {
    const intern = new Intern('Jacob',1,'testemail@gmail.com','OSU');
    expect(intern.school).toEqual('OSU');
})

test ('gets intern school ', () =>{
    const intern = new Intern('Jacob',1,'testemail@gmail.com','OSU');
    expect(intern.getSchool()).toEqual('OSU');
})
test('get intern role', () => {

    const intern = new Intern('Jacob',1,'testemail@gmail.com','OSU');
    expect(intern.getRole()).toEqual('Intern');
})