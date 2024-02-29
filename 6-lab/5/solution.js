function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search_value = document.querySelector('#searchField').value.toLowerCase().trim();
      let array_rows = document.querySelectorAll('tbody tr');
      array_rows.forEach(row => {
         let cells = row.children;
         let found = false;

         Array.from(cells).forEach(cell => {
             let cell_text = cell.textContent.toLowerCase();

             if (cell_text.includes(search_value)) {
                 found = true;
             }
         });

         if (found && search_value.length > 0) {
             row.classList.add('select');
         } else {
             row.classList.remove('select');
         }
     });

   }
}