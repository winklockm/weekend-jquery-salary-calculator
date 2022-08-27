$(document).ready(onReady);

function onReady(){
    $('#submit-button').on('click', handleSubmit);
}

let employeeArray = [];
let totalMonthly = 0;

function handleSubmit(){
    // create object
    let firstNameInput = $('#firstname-input').val();
    let lastNameInput = $('#lastname-input').val();
    let idNumInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input').val();
    let monthlySalary = salaryInput/12;
    let employee = {
        firstname: firstNameInput,
        lastname: lastNameInput,
        idnumber: idNumInput,
        title: titleInput,
        salary: salaryInput,
        monthlysal: monthlySalary,
    }
    // push object to array
    employeeArray.push(employee);
    // add data to table
    $('#datatable').append(`<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idNumInput}</td><td>${titleInput}</td><td>${salaryInput}</td></tr>`);
    // run function to calculate monthly total from the updated array
    calculateTotalFromArray(employeeArray);
    //clear input fields
    $('#firstname-input').val('');
    $('#lastname-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#salary-input').val('');
}

//calculate total monthly cost using data from an array (employee array is passed in using handleSubmit function)
function calculateTotalFromArray(employeeArray){
    // target the .monthlysal of the last item in the array and add it to the total monthly
    let newMonthly = employeeArray[employeeArray.length-1].monthlysal;
    totalMonthly += newMonthly;
    // update Total Monthly at bottom of page
    $('#total-monthly').empty();
    $('#total-monthly').append(totalMonthly);
}