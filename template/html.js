// manager card

const createManager = function (manager) {
    return `
    <div class = "col-4 mt-4">
        <div class ='card'>
            <div class='card-header'>
                <h2 ${manager.name}</h2>
                <h3>Manager</h3>
            </div>

             <div class = 'card-body'>
                <p class = 'id'>ID: ${manager.id}</p>
                <p class = 'email'>Email: <a href = "mailto:${manager.email}"${manager.email}</a></p>
                <p class = "office">Office Number: ${manager.officeNumber}</p>
             </div>
         </div>
    </div>
    `;
}

const createEngineer = function(engineer){

return `
<div class="col-4 mt-4">
<div class="card h-100">
    <div class="card-header">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
    </div>

    <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>

</div>
</div>
`;  
}

const createIntern = function(intern){
return `
<div class="col-4 mt-4">
<div class="card h-100">
    <div class="card-header">
        <h3>${intern.name}</h3>
        <h4>Intern</h4><i class="material-icons">assignment_ind</i>
    </div>

    <div class="card-body">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">School: ${intern.school}</p>
    </div>
</div>
</div>
`;
}


createTemplate =(employeeInfo) =>{

    employeeBucket = [];

    for(let i=0;i<employeeInfo.length;i++){
        const employee = employeeInfo[i];
        const employeeRole = employee.getRole();
        
        if(employeeRole ==='Manager'){
            const managerCard = createManager(employee);
            employeeBucket.push(managerCard);
        }
        if (employeeRole === 'Engineer') {
            const engineerCard = createEngineer(employee);

            employeeBucket.push(engineerCard);
        }
        if (employeeRole === 'Intern') {
            const internCard = createEngineer(employee);

            employeeBucket.push(internCard);
        }
    }


    const employeeCardsJoined = employeeBucket.join('');
    const teamProfile = teamProfileGenerator(employeeCardsJoined);
    return teamProfile;
}