const buttonContainer: HTMLElement =
  document.querySelector(".buttons-container");
const numberContainer: HTMLElement = document.querySelector(".number");

let currentNumber: number = 3;

buttonContainer.addEventListener("click", (e: Event) => {
  const a: HTMLElement = e.target as unknown as HTMLElement;

  switch (a.className) {
    case "decrease-button":
      if (currentNumber > 0) currentNumber -= 1;
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
