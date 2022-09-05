const Engineer = require('../classes/Engineer');

test('verifies engineer object created', () => {
    const engineer = new Engineer('Jacob',1,'testemail@gmail.com','Cuttingham');
    expect(engineer.github).toEqual('Cuttingham');
});

test ('gets github username', () => {
    const engineer = new Engineer('Jacob',1,'testemail@gmail.com','Cuttingham');
    expect(engineer.getGithub()).toEqual('Cuttingham');
})

test ('gets role of employee', () => {
    const engineer = new Engineer('Jacob',1,'testemail@gmail.com','Cuttingham');
    expect(engineer.getRole()).toEqual('Engineer');
})