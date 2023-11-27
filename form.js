/*//give an alert after submission 

function submit_form() {
    alert("Thanks for your interest in our tours, one of our reps will get back to you as soon as possible");
}  

//checks to see if all filds have been entered successfully 

function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}
function showError(input, message) {
    return showMessage(input, message, false);
}
function showSuccess(input) {
    return showMessage(input, "", true);
}
function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

//checks if it is a valid email address

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

const form = document.getElementById("signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function(event) {

    event.preventDefault();


    let fnameValid = hasValue(form.elements["fname"], NAME_REQUIRED);
    let lnameValid = hasValue(form.elements["lname"], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);

    if (fnameValid && lnameValid && emailValid) {
        alert("This is just a demo, your details are safe.");
    }
});

//reset the form

const formToReset = document.getElementById('signup');
formToReset.addEventListener('submit', (e) => {
   e.preventDefault();
   formToReset.reset();
});
*/

/*jslint browser:true */


function validateForm() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;


    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "";

    if (!firstName || !lastName || !email || !comments) {
        errorMessage.innerHTML = "All fields are required.";
        return;
    }

    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = "Enter a valid email address.";
        return;
    }

    // If all validations pass, proceed with form submission
    window.alert("Form submitted successfully!");
}