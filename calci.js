function calculate() {
    
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    
    var total= a + b;
    
    document.getElementById('result').innerHTML = name + "total  " + total;
}
