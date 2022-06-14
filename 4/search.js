function search() {
   let towns = document.querySelectorAll('li');
   let input = String(document.getElementById('searchText').value);
   let result = document.getElementById('result');
   let counter = 0;
   for(let t of towns){
      if(input.includes(t.textContent)){
         counter++;
         t.style.fontWeight = "bold";
         t.style.textDecoration = "underline";
      }
   }
   result.innerHTML = counter;
}
