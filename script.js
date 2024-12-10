const signup_form = document.getElementById("signup-form");
let signup_container = document.getElementById("signup-container");



// Select the outer div
const outerDiv = document.getElementById("nested_divs").querySelector("div > div");

// Select all <p> tags within that outer div
const paragraphs = outerDiv.querySelectorAll("p");

// Access the second <p> element (index 1)
const secondParagraph = paragraphs[1];
  



// Change the password placeholder on page load
signup_form.elements["password"].placeholder = "Enter your password";

// Define the changeContent function
function changeContent() {
    // Change the placeholder of the email input field
    signup_form.elements["email"].placeholder = "Is entering your email";
}

// Attach an event listener to the email input field
signup_form.elements["email"].addEventListener("focus", changeContent);

const changeText = () => {
    const signUpButton = signup_form.querySelector("button#sub");
    if (signUpButton.textContent === "Sign up") {
        signUpButton.textContent = "You have signed in";
    } else {
        signUpButton.textContent = "Sign up";
    }
};

const changeBC = () => {
    signup_form.elements["role"].style.backgroundColor = "red"; // Change background of the <select>
};

const resetBC = () => {
    signup_form.elements["role"].style.backgroundColor = ""; // Reset to default
};

const changeTextBC = () => {
    // Select the first <p> tag inside signup_container
    signup_container.querySelector("p").style.backgroundColor = "purple";
};
const resetTextBC = () => {
    // Select the first <p> tag inside signup_container
    signup_container.querySelector("p").style.backgroundColor = "white";
};


const changeTextBC1 = () => {
    // Select the first <p> tag inside signup_container
    secondParagraph.style.backgroundColor = "purple";
};
const resetTextBC1 = () => {
    // Select the first <p> tag inside signup_container
    secondParagraph.style.backgroundColor = "white";
};

// Attach event listeners to the <select> element
signup_form.elements["role"].addEventListener("mouseover", changeBC);
signup_form.elements["role"].addEventListener("mouseout", resetBC);

// Attach an event listener to the first <p> inside signup_container
signup_container.querySelector("p").addEventListener("mouseover", changeTextBC);
signup_container.querySelector("p").addEventListener("mouseout", resetTextBC);

// Attach event listener to the Sign Up button
signup_form.querySelector("#sub").addEventListener("click", changeText);

secondParagraph.addEventListener("mouseover", changeTextBC1);

secondParagraph.addEventListener("mouseout", resetTextBC1);
