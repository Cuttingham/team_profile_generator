const Employee = require('../classes/Employee');

test ("creates employee object", () =>{
 const employee = new Employee ("Jacob",1,'testemail@gmail.com');

expect(employee.name).toEqual(expect.any(String));
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
});

test ('gets employee name', () =>{
const employee = new Employee('Jacob',1,'testemail@gmail.com');
expect(employee.getName()).toEqual('Jacob');
})

test('gets employee id', () =>{
const employee = new Employee ('Jacob',1,'testemail@gmail.com');
expect(employee.getId()).toEqual(1);
})

test ('gets employee email' , () => {
const employee =new Employee ('Jacob',1,'testemail@gmail.com');
expect(employee.getEmail()).toEqual('testemail@gmail.com');
})

test ('gets role of employee', ()=>{

const employee =new Employee ('Jacob',1,'testemail@gmail.com');
expect(employee.getRole()).toEqual("Employee");
})
