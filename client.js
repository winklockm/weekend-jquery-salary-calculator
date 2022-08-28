$(document).ready(onReady);

function onReady(){
    $('#submit-button').on('click', checkInput);
    $(document).on('click', '.deletebutton', deleteRow);
}

let employeeArray = [];
let totalMonthly = 0;

// only submit if all fields are filled out
function checkInput(){
    if($('#firstname-input').val() && $('#lastname-input').val() && $('#id-input').val() && $('#title-input').val() && $('#salary-input').val()){
        addEmployee();
    }
}

function addEmployee(){
    // create variables
    let firstNameInput = $('#firstname-input').val();
    let lastNameInput = $('#lastname-input').val();
    let idNumInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input').val();
    let formatSal = (Number(salaryInput)).toLocaleString('en-US'); // converts to number and then to string
    let monthlySalary = Math.round(salaryInput/12); // rounds to integer
    // create object
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
    $('#datatable').append(`<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td class="employeeid">${idNumInput}</td><td>${titleInput}</td><td>$${formatSal}</td><td><button class="deletebutton">Delete</button></td></tr>`);
    // run function to calculate monthly total from the updated array
    calculateTotalFromArray(employeeArray);
    // clear input fields
    $('#firstname-input').val('');
    $('#lastname-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#salary-input').val('');
}

//calculate total monthly cost using data from an array
function calculateTotalFromArray(employeeArray){
    // target the .monthlysal of the last item in the array and add it to the total monthly
    let newMonthly = employeeArray[employeeArray.length-1].monthlysal;
    totalMonthly += newMonthly;
    // convert totalMonthly to string
    let num = totalMonthly.toLocaleString('en-US');
    // update Total Monthly at bottom of page
    $('#total-monthly').empty();
    $('#total-monthly').append(num);
    // if total > 20,000 set background to red
    if(totalMonthly > 20000){
        $('#total-monthly').css('background-color', 'red');
    }
}
 // delete row when delete button is clicked
function deleteRow() {
    $( this ).closest('tr').remove();
}