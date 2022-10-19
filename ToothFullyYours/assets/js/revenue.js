var table = document.getElementById("table"),
sumVal = 0;
for (var i = 1; i < table.rows.length - 1; i++) {
sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
}
document.getElementById("val").innerHTML = parseInt(sumVal);
console.log(sumVal);