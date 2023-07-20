let displayValue = '0';
let currentValue = null;
let selectedOperator = null;
let isDecimalUsed = false;

function updateDisplay() {
  const display = document.getElementById('display-text');
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!isDecimalUsed) {
    displayValue += '.';
    isDecimalUsed = true;
    updateDisplay();
  }
}

function setOperator(operator) {
  if (currentValue !== null) {
    calculate();
  }
  currentValue = parseFloat(displayValue);
  selectedOperator = operator;
  displayValue = '0';
  isDecimalUsed = false;
}

function clearDisplay() {
  displayValue = '0';
  currentValue = null;
  selectedOperator = null;
  isDecimalUsed = false;
  updateDisplay();
}

function calculate() {
  if (selectedOperator === null) return;
  const newValue = parseFloat(displayValue);
  switch (selectedOperator) {
    case '+':
      currentValue += newValue;
      break;
    case '-':
      currentValue -= newValue;
      break;
    case '*':
      currentValue *= newValue;
      break;
    case '/':
      if (newValue === 0) {
        displayValue = 'ERR: DIVIDE BY 0';
        updateDisplay();
        return;
      }
      currentValue /= newValue;
      break;
  }
  displayValue = currentValue.toString();
  currentValue = null;
  selectedOperator = null;
  isDecimalUsed = false;
  updateDisplay();
}

function removeNumber() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
      displayValue = '0';
    }
    updateDisplay();
  }
  

updateDisplay();