const rows = document.querySelectorAll("tbody tr");
const totalRows = rows.length;

if (totalRows > 0) {
    rows[0].style.backgroundColor = 'blue';        
    rows[totalRows - 1].style.backgroundColor = 'green';

    for (let i = 1; i < totalRows - 1; i++) {
        if (i % 2 !== 0) { // rânduri impare (index 1,3,5,...)
            rows[i].style.backgroundColor = 'violet';
        }
    }
}
