let display = document.getElementById('display');
  let currentValue = '';

  
  function appendNumber(number) {
    currentValue += number;
    display.value = currentValue;
  }

 
  function appendOperator(operator) {
    if (currentValue === '') return;
    currentValue += ' ' + operator + ' ';
    display.value = currentValue;
  }

 
  function clearDisplay() {
    currentValue = '';
    display.value = '';
  }

  
  function deleteLast() {
    currentValue = currentValue.trim().slice(0, -1);
    display.value = currentValue;
  }

  
  function calculate() {
    try {
      currentValue = eval(currentValue.replace('×', '*').replace('÷', '/')).toString(); 
      display.value = currentValue;
    } catch (error) {
      display.value = 'Error';
      currentValue = '';
    }
  }