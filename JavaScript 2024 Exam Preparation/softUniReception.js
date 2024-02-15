function softUniReception(arr) {

    let employeeOne = Number(arr[0]);
    let employeeTwo = Number(arr[1]);
    let employeeThree = Number(arr[2]);

    let students = Number(arr[3]);

    let allEmployees = employeeOne + employeeThree + employeeTwo;

    let hours = 0;

    while (students > 0) {
        hours++;
        if (hours % 4 === 0) {
            continue;
        }
        students -= allEmployees;


    }

    console.log(`Time needed: ${hours}h.`);

}
softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);