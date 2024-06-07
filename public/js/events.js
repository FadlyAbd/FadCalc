 document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => { 
      let observer;

      const handleIntersection = (entries) => {
        entries.forEach(entry => {
          const cards = entry.target.querySelectorAll('.animated-card');
          const texts = entry.target.querySelectorAll('.animated-text');
          if (entry.isIntersecting) {
            cards.forEach(card => {
              card.classList.add('slide-in');
              card.classList.remove('slide-out');
            });
            texts.forEach(text => {
              text.classList.add('slide-in-x');
              text.classList.remove('slide-out-x');
            });
          } else {
            cards.forEach(card => {
              card.classList.remove('slide-in');
              card.classList.add('slide-out');
            }); 
            texts.forEach(text => {
              text.classList.add('slude-out-x');
              text.classList.remove('slide-in-x');
            });
          }
        });
      };

      observer = new IntersectionObserver(handleIntersection, { 
        threshold: 0.5,
        root: null,
        rootMargin: "0px" 
      });
      observer.observe(section);
    });
  });

const display = document.getElementById("display");

function MunculkanKeDisplay(input){
  display.value += input;
}
  
function hapus(){
  display.value = "";
}
  
function hitung(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function combination(n, r) {
  try {
      if (n < 0 || r < 0 || n < r) {
          throw new Error("Invalid values for n and r");
      }
      return factorial(n) / (factorial(r) * factorial(n - r));
  } catch (error) {
      return error.message;
  }
}

function permutation(n, r) {
  try {
      if (n < 0 || r < 0 || n < r) {
          throw new Error("Massukkan n dan r yang benar!");
      }
      return factorial(n) / factorial(n - r);
  } catch (error) {
      return error.message;
  }
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace(',', '.');
}

function calculateCombination() {
  const n = parseInt(document.getElementById('n').value);
  const r = parseInt(document.getElementById('r').value);
  const result = combination(n, r);
  const formattedResult = isNaN(result) ? result : formatNumber(result);
  document.getElementById('result').textContent = `Kombinasi ${n}C${r} adalah ${formattedResult}`;
}

function calculatePermutation() {
  const n = parseInt(document.getElementById('n').value);
  const r = parseInt(document.getElementById('r').value);
  const result = permutation(n, r);
  const formattedResult = isNaN(result) ? result : formatNumber(result);
  document.getElementById('result').textContent = `Permutasi ${n}P${r} adalah ${formattedResult}`;
} 

function convertDistance() {
  const unitConversions = {
    km: 1,
    hm: 0.1,
    dam: 0.01,
    m: 0.001,
    dm: 0.0001,
    cm: 0.00001,
    mm: 0.000001
  }

  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let distanceInput = document.getElementById("distance").value;
  
  
  const distance = parseFloat(distanceInput.replace(/,\d*/, '|').replace('|', '.')); 
  const result = document.getElementById("result");

  if (isNaN(distance)) {
    result.value = "Error! Input tidak valid";
    return;
  };

  const distanceInKm = distance * unitConversions[fromUnit]; 
  const convertedDistance = distanceInKm / unitConversions[toUnit]; 

  const options = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  result.value = convertedDistance.toLocaleString('id-ID', options);
} 

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

function convertWeight() {
  const unitBerat = {
    kg: 1,
    hg: 0.1,
    dag: 0.01,
    g: 0.001,
    dg: 0.0001,
    cg: 0.00001,
    mg: 0.000001
  }

  const dariUnit = document.getElementById("dariUnit").value;
  const keUnit = document.getElementById("keUnit").value;
  let weightInput = document.getElementById("weight").value;
  
  
  const weight = parseFloat(weightInput.replace(/,\d*/, '|').replace('|', '.')); 
  const res = document.getElementById("res");

  if (isNaN(weight)) {
    result.value = "Error! Input tidak valid";
    return;
  };

  const weightInKg = weight * unitBerat[dariUnit]; 
  const convertedWeight = weightInKg / unitBerat[keUnit]; 

  const options = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  res.value = convertedWeight.toLocaleString('id-ID', options);
}
























