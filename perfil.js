var editableElements = document.getElementsByClassName("editable", "username", "bloodtype", "location", "email", "number");

var editableArray = Array.from(editableElements);

editableArray.forEach(function (element) {
    element.addEventListener("blur", function () {
        localStorage.setItem(element.id, element.innerHTML);
    });
});

window.addEventListener("load", function () {
    editableArray.forEach(function (element) {
        var content = localStorage.getItem(element.id);

        if (content) {
            element.innerHTML = content;
        }
    });
});

const usernameInput = document.querySelector('.username');
const bloodtypeInput = document.querySelector('.bloodtype');
const locationInput = document.querySelector('.location');
const emailInput = document.querySelector('.email');
const numberInput = document.querySelector('.number');

usernameInput.addEventListener('input', handleInputChange);
bloodtypeInput.addEventListener('input', handleInputChange);
locationInput.addEventListener('input', handleInputChange);
emailInput.addEventListener('input', handleInputChange);
numberInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    const value = event.target.textContent;

    localStorage.setItem(event.target.className, value);
}

window.addEventListener('load', function () {
    usernameInput.textContent = localStorage.getItem('username');
    bloodtypeInput.textContent = localStorage.getItem('bloodtype');
    locationInput.textContent = localStorage.getItem('location');
    emailInput.textContent = localStorage.getItem('email');
    numberInput.textContent = localStorage.getItem('number');
});