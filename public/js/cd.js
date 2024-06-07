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