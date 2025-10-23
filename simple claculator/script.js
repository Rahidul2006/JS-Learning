const inputField = document.querySelector(".input input");
const buttons = document.querySelectorAll(".btnn");
const equalsButton = document.getElementById("Ans");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            inputField.value = "";
        } else if (value !== "=") {
            inputField.value += value;
        }
    });
});

equalsButton.addEventListener("click", () => {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = "Error";
    }
});
