const container = document.querySelector(".container");
const myButton = document.querySelector("button");
const myDate = document.querySelector("input");
const header = document.querySelector("h1");
const p = document.querySelector("#display");

const errorMessage = document.createElement("p"); // Create error message element
errorMessage.id = "error"; // Set id for error message
errorMessage.textContent = "Please enter your Date of birth";
myDate.insertAdjacentElement('afterend', errorMessage); // Insert error message after the input element

myButton.addEventListener("click", () => {
    const dateOfBirth = myDate.value.trim();
    if (!dateOfBirth) {
        errorMessage.style.display = "block"; // Show error message if date of birth is not entered
        return; // Stop execution if date of birth is not entered
    } else {
        errorMessage.style.display = "none"; // Hide error message if date of birth is entered
    }
    
    const date = new Date(myDate.value);
    const currentDate = new Date(); // Define currentDate
    const year = date.getFullYear();
    const currentYear = currentDate.getFullYear(); // Changed to currentDate
    const age = currentYear - year;
    
    if (date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate()) {
        p.textContent = `Happy Birthday! You are ${age} years old Today`;
    } else {
        p.textContent = `Your age is ${age} years old`;
    }

})