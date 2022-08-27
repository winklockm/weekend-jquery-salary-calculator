$(document).ready(onReady);

function onReady(){
    //console.log('JQ')
    $('#submit-button').on('click', handleSubmit);
}

let employeeArray = [];


// function handleSubmit(){  // creates object and pushes it into array
//     let firstNameInput = $('#firstname-input').val();
//     let lastNameInput = $('#lastname-input').val();
//     let idNumInput = $('#id-input').val();
//     let titleInput = $('#title-input').val();
//     let salaryInput = $('#salary-input').val();
//     let employee = {
//         firstname: firstNameInput,
//         lastname: lastNameInput,
//         idnumber: idNumInput,
//         title: titleInput,
//         salary: salaryInput,
//     }
//     employeeArray.push(employee); //push employee object into array
//     $('#datatable').append(`<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idNumInput}</td><td>${titleInput}</td><td>${salaryInput}</td></tr>`);
// }

function handleSubmit(){  // creates object and pushes it into array
    let firstNameInput = $('#firstname-input').val();
    let lastNameInput = $('#lastname-input').val();
    let idNumInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input').val();
    let employee = {
        firstname: firstNameInput,
        lastname: lastNameInput,
        idnumber: idNumInput,
        title: titleInput,
        salary: salaryInput,
    }
    employeeArray.push(employee); //push employee object into array
    calculateTotalFromArray(employeeArray);

    // below adds that to the table but can I do it by pulling from the array
    // $('#datatable').append(`<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idNumInput}</td><td>${titleInput}</td><td>${salaryInput}</td></tr>`);
}


function calculateTotalFromArray(array){
    console.log('in pull from array');

}

// take the last item's info out of array and append it into table

// create object from input data
// push objects to array
// add table row
// whatever you pushed add to table cells