document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const keysContainer = document.querySelector(".keys");

    let currentInput = "";

    keysContainer.addEventListener("click", (event) => {
        const clickedButton = event.target;
        if (!clickedButton.classList.contains("button")) return;

        const value = clickedButton.textContent;

if(value==="="){
    currentInput = calculateResult(currentInput);
}
else if (value === "c") {
currentInput = "";
}
else{
    currentInput += value;
}

display.value = currentInput;
});
});

const calculateResult = (input) => {
    try {
        return new Function("return " + input)();
    } catch {
        return "Error";
    }
};
