const inName = document.getElementsByClassName("name")[0];
const inEmail = document.getElementsByClassName("email")[0];
const inPassword = document.getElementsByClassName("password")[0];
const btnSubmit = document.getElementsByClassName("submit")[0];
const errorName = document.getElementsByClassName("errors1")[0];
const errorEmail = document.getElementsByClassName("errors2")[0];
const errorPass = document.getElementsByClassName("errors3")[0];


btnSubmit.addEventListener("click", () => {
    function NameCheck() {
        let nameValue = inName.value;
        if (nameValue == "") {
            errorName.textContent = "Name field is required";
            errorName.style.display = "block";
        }
        else {
            errorName.style.display = "none";
        }
    }
    function emailCheck() {
        let emailValue = inEmail.value;
        if (emailValue == "" || !emailValue.includes("@")) {
            errorEmail.textContent = "Enter proper Email";
            errorEmail.style.display = "block";
        }
        else {
            errorEmail.style.display = "none";
        }
    }
    function passCheck() {
        let passwordValue = inPassword.value;
        if (passwordValue == "" || passwordValue.length < 6) {
            errorPass.textContent = "Enter proper Password";
            errorPass.style.display = "block";
        }
        else {
            errorEmail.style.display = "none";
        }
    }


    NameCheck();
    emailCheck();
    passCheck();



})