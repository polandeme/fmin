var row_table = new Array(),
    td = $("td");
console.log(td.length);
for(var i = 0; i < td.length; i++) {
    row_table.push(td.eq(i));
}
console.log(row_table.length);
row_table[0].click(function() {
    console.log("ds");
})
