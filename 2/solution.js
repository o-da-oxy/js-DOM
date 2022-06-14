function solve() {
  let text = String(document.getElementById('text').value);
  let format = String(document.getElementById('naming-convention').value);
  let result = document.getElementById('result');
  let res = "";
  let upperSymbol;
  let lowerSymbol;
  if (format == "Pascal Case"){
    text = text.toLowerCase().split(' ');
    for (let i = 0; i < text.length; i++){
      upperSymbol = text[i].charAt(0).toUpperCase();
      res += `${text[i].replace(text[i].charAt(0), upperSymbol)}`;
    }
  }
  else if (format == "Camel Case"){
    text = text.toLowerCase().split(' ');
    for (let i = 0; i < text.length; i++){
      upperSymbol = text[i].charAt(0).toUpperCase();
      res += `${text[i].replace(text[i].charAt(0), upperSymbol)}`;
    }
    lowerSymbol = res.charAt(0).toLowerCase();
    res = res.replace(res.charAt(0), lowerSymbol);
  }
  else{
    res = "Error!";
  }
  result.innerHTML = res;
}