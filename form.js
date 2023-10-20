//give an alert after submission 

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

function validateEmail(input, requiredMsg, invalidMsg) {
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
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