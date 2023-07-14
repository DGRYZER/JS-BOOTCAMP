function calculateEMI() {
    var principal = parseFloat(document.getElementById('principal').value);
    var interest = parseFloat(document.getElementById('interest').value);
    var tenure = parseInt(document.getElementById('tenure').value);
    
    var monthlyInterest = (interest / 12) / 100;
    var emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) / (Math.pow(1 + monthlyInterest, tenure) - 1);
    
    document.getElementById('result').textContent = "EMI: Rs-" + emi.toFixed(2);
  }