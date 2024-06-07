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