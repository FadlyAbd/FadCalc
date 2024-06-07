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