function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value.replace(/,\d*/, '|').replace('|', '.'));
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value; 
    let result;
    if (inputUnit === outputUnit) {
      result = inputValue;
    } else if (inputUnit === 'Celsius') {
      if (outputUnit === 'Fahrenheit') {
        result = (inputValue * 9/5) + 32;
      } else if (outputUnit === 'Kelvin') {
          result = inputValue + 273.15;
      } else if (outputUnit === 'Reamur') {
        result = inputValue * 4/5;
      }
    } else if (inputUnit === 'Fahrenheit') {
      if (outputUnit === 'Celsius') {
        result = (inputValue - 32) * 5/9;
      } else if (outputUnit === 'Kelvin') {
        result = (inputValue - 32) * 5/9 + 273.15;
      } else if (outputUnit === 'Reamur') {
        result = (inputValue - 32) * 4/9;
      }
    } else if (inputUnit === 'Kelvin') {
      if (outputUnit === 'Celsius') {
        result = inputValue - 273.15;
      } else if (outputUnit === 'Fahrenheit') {
        result = (inputValue - 273.15) * 9/5 + 32;
      } else if (outputUnit === 'Reamur') {
        result = (inputValue - 273.15) * 4/5;
      }
    } else if (inputUnit === 'Reamur') {
      if (outputUnit === 'Celsius') {
        result = inputValue * 5/4;
      } else if (outputUnit === 'Fahrenheit') {
        result = (inputValue * 9/4) + 32;
      } else if (outputUnit === 'Kelvin') {
        result = (inputValue * 5/4) + 273.15;
      }
    } 
    const options = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
    let formattedResult = result.toLocaleString('id-ID', options);  
    document.getElementById('result').value = `${formattedResult}`;
  }