const inputResult = document.getElementById("input-result");
const numberbuttons = Array.from(document.querySelectorAll(".button-n button"));
const buttonZero = document.getElementById("button-zero");

numberbuttons.push(buttonZero);

const pointOperation = document.getElementById("button-point");
const toEqual = document.getElementById("button-to-equal");

const operations = Array.from(document.querySelectorAll(".operations button"));

const clearButton = document.getElementById("button-clear");


const mainFunctions = {
  firstNum: null,
  secondNum: null,
  operationChoice: null,
  result: null,
};

const inputgetNumber = (button_value) => {
  const numberValue = button_value.textContent;
  inputResult.value += numberValue;

  if (mainFunctions.operationChoice === null) {
    mainFunctions.firstNum = Number(inputResult.value);
  } else {
    mainFunctions.secondNum = Number(inputResult.value);
  }
};

const eventsUser = (arrayEvent, calledFunction) => {
  for (let index = 0; index < arrayEvent.length; index += 1) {
    arrayEvent[index].addEventListener("click", () => {
      calledFunction(arrayEvent[index]);
    });
  }
};

const choiceOperation = (button_value) => {
  inputResult.value = "";
  mainFunctions.operationChoice = button_value.textContent;
};

const calculatorSum = () => {
  if (mainFunctions.operationChoice == "+") {
    mainFunctions.result = inputResult.value =
      mainFunctions.firstNum + mainFunctions.secondNum;
    mainFunctions.firstNum = mainFunctions.result;
    mainFunctions.secondNum = null;
    mainFunctions.operationChoice = null;
  }
};

const calculatorSubtration = () => {
  if (mainFunctions.operationChoice == "-") {
    mainFunctions.result = inputResult.value =
      mainFunctions.firstNum - mainFunctions.secondNum;
    mainFunctions.firstNum = mainFunctions.result;
    mainFunctions.secondNum = null;
    mainFunctions.operationChoice = null;
  }
};

const calculatorMulti = () => {
  if (mainFunctions.operationChoice == "*") {
    mainFunctions.result = inputResult.value =
      mainFunctions.firstNum * mainFunctions.secondNum;
    mainFunctions.firstNum = mainFunctions.result;
    mainFunctions.secondNum = null;
    mainFunctions.operationChoice = null;
  }
};

const calculatorDiv = () => {
  if (mainFunctions.operationChoice == "/") {
    mainFunctions.result = inputResult.value =
      mainFunctions.firstNum / mainFunctions.secondNum;
    mainFunctions.firstNum = mainFunctions.result;
    mainFunctions.secondNum = null;
    mainFunctions.operationChoice = null;
  }
};

const clear = () => {
  inputResult.value = "";
  mainFunctions.firstNum = null;
  mainFunctions.secondNum = null;
  mainFunctions.operationChoice = null;
};

window.onload = () => {
  eventsUser(numberbuttons, inputgetNumber);
  eventsUser(operations, choiceOperation);

  toEqual.addEventListener("click", () => {
    if (mainFunctions.operationChoice != null) {
      switch (mainFunctions.operationChoice) {
        case "+":
          calculatorSum();
          break;
        case "-":
          calculatorSubtration();
          break;
        case "*":
          calculatorMulti();
          break;
        case "/":
          calculatorDiv();
          break;
      }
    }

    clearButton.addEventListener("click", limpar());
  });

  clearButton.addEventListener("click", clear);
};
