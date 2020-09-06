const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");


function validateForm() {
    event.preventDefault();

    if (checkLength(lastName.value, 4) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    console.log("hello");

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}