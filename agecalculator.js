const container = document.querySelector(".container");
const myButton = document.querySelector("button");
const myDate = document.querySelector("input");
const header = document.querySelector("h1");
const p = document.querySelector("#display");
const clearButton = document.querySelector("#clear");

const errorMessage = document.createElement("p"); // Create error message element
errorMessage.id = "error"; // Set id for error message
errorMessage.style.color = "red"; // Set error message color
errorMessage.textContent = "Please enter a valid Date of Birth";
myDate.insertAdjacentElement('afterend', errorMessage); // Insert error message after the input element
errorMessage.style.display = "none"; // Hide error message initially

myButton.addEventListener("click", () => {
    const dateOfBirth = myDate.value.trim();
    const year = dateOfBirth.split("-")[0]; // Extract the year part from the input

    // Check if dateOfBirth is empty
    if (!dateOfBirth || isNaN(year) || year.length !== 4) {
        errorMessage.style.display = "block"; // Show error message
        return; // Stop execution if date of birth is not valid
    } else {
        errorMessage.style.display = "none"; // Hide error message if date of birth is valid
    }

    const date = new Date(dateOfBirth);
    const currentDate = new Date(); // Define currentDate
    const currentYear = currentDate.getFullYear();
    const age = currentYear - date.getFullYear();

    if (date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate()) {
        p.textContent = `Happy Birthday! You are ${age} years old Today`;
    } else {
        p.textContent = `Your age is ${age} years old`;
    }
  
});

clearButton.addEventListener("click", () => {
  myDate.value = ""; 
  p.textContent = ""; 
  errorMessage.style.display = "none"; 
});
