var row_table = new Array(),
    num_j = new Array();
    cell = $("td");
for(var i = 0; i < cell.length; i++) {
    row_table.push(cell.eq(i));
}


function init(num) {
    j = Math.round(Math.random() * (row_table.length-1));
    for(var i = 0; i < num; i++) {
        while(row_table[j] === undefined) {
            j = Math.round(Math.random() * (row_table.length-1));
        }
            row_table[j].addClass("red");//css("background","red");
            var cell_num = "<div class = 'cell-num'>" + j + "</div>";
            num_j.push(j);
            // console.log(num_j.length);
            row_table[j].html(cell_num);
            delete row_table[j];
    }
}
init(2);
cell.click(function() {
    var this_num = parseInt($(this).text()),
        self = $(this);
    if(this_num > _.min(num_j) ) {
        console.log("f");
        self.addClass("blue")
        setTimeout(function(){
            self.removeClass().addClass("red");//css("background", "red");
        },50);
    } else {
        self.removeClass().addClass("while").text('');
        num_j.splice(self.index(), 1);
        // console.log(_.min(num_j);
        console.log(_.min(num_j));
        console.log(num_j[0]);
        console.log(num_j[1]);
        console.log(_.min(num_j));
        init(1);

    }
})
