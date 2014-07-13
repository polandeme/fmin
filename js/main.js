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
            row_table[j].addClass("red");
            var cell_num = "<div class = 'cell-num'>" + j + "</div>";
            num_j.push(j);
            row_table[j].html(cell_num);
            delete row_table[j];
    }
}

init(2);

$("body").on("click", ".red" ,function() {
    var this_num = parseInt($(this).text()),
        self = $(this);
    if(this_num > _.min(num_j) ) {
        self.addClass("blue")
        setTimeout(function(){
            self.removeClass().addClass("red");
        },50);
    } else {
        self.removeClass().addClass("white").text('');
        num_j.remove(_.min(num_j));
        // num_j.splice(self.index(), 1);
        init(1);
    }
});

//delete element from array by element
Array.prototype.indexOf = function(val) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === val) {
            return i;
        } else {
            return -1;
        }
    }
};

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if( index > -1 ) {
        this.splice(index,1);
    }
};
