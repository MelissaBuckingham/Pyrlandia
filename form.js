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