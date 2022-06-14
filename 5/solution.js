function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = String(document.getElementById('searchField').value);
      if(input == ''){
         input = null;
      }
      let rows = document.querySelectorAll('table tr');
      for(let i = 0; i < rows.length; i++){
         if(rows[i].textContent.includes(input)){
            rows[i].classList.add('select');
         }
         else{
            while(rows[i].classList.length > 0){
               rows[i].classList.remove(rows[i].classList.item(0));
            }
         }
      }
   }
}