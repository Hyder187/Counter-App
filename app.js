var buttonContainer = document.querySelector(".buttons-container");
var numberContainer = document.querySelector(".number");
var currentNumber = 3;
buttonContainer.addEventListener("click", function (e) {
    var a = e.target;
    switch (a.className) {
        case "decrease-button":
            if (currentNumber > 0)
                currentNumber -= 1;
            break;
        case "increase-button":
            currentNumber += 1;
            break;
        case "reset-button":
            currentNumber = 0;
            break;
    }
    numberContainer.textContent = currentNumber.toString();
});
