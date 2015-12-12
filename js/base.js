// var Cell = {
// 	i,
// 	j,
// 	value,
// 	available
// }
//初始化cell
var count = 0; // 正确点击次数，也是生成新的随机数的基数。
function initCell(n) {
	var list = '';
	var li = '';
	for(var i = 0; i < n; i++) {
		if(i <= 11) {
			li = '<li class="cell-item border-un-bottom">' + '</li>';
		} else {
			li = '<li class="cell-item border-bottom">' + '</li>';
		}
		list += li;
	}
	$('.cell-group').html(list);
}

//
function getRandomNum(base) {
	var base = base || 10;
	var num_one = Math.floor(Math.random() * base);
	var num_two = Math.floor(Math.random() * base);
	while(num_one === num_two) {
		num_two = Math.floor(Math.random() * base);
	}
	return {
		num_one: num_one,
		num_two: num_two
	}
}

//往初始化cell中插入数字
function insertNum() {
	var index_one = Math.floor(Math.random() * 16);
	var index_two = Math.floor(Math.random() * 16);
	while(index_two === index_one) {
		index_two = Math.floor(Math.random() * 16);
	}
	var randomNum = getRandomNum();
	var num_one = randomNum.num_one;
	var num_two = randomNum.num_two;

	//(num_two = [num_one, num_one = num_two][0]) swap two num
	(num_one > num_two) ? (num_two = [num_one, num_one = num_two][0]) : null;

	$('.cell-item').eq(index_one)
				   .addClass('has-num right-cell')
				   .html('<span>' + num_one + '</span>');

	$('.cell-item').eq(index_two)
	               .addClass('has-num wrong-cell')
	               .html('<span>' + num_two + '</span>');
}

// 点击监听
function handelClick() {
	$('body').on('click', '.right-cell', function() {
		count++;
		scoreAnim();
		var curNum = parseInt($('.right-cell').text());
		$(this).html('').removeClass('has-num right-cell');
		console.log('curNum');
		console.log(curNum);
		console.log('curNum end');
		reDraw(curNum);
	});
	$('body').on('click', '.cell-item:not(.right-cell)', function() {
		console.log('is wrong');
		var that = $(this);
		errorClickHandle(that);
	})
}

// 
function reDraw(curNum) {
	var n = n || 15;
	var index = Math.floor(Math.random() * n);
	var num = Math.floor(Math.random() * 10);
	// var curNum = parseInt($('.right-cell').text());
	var num = randomAgain(curNum);
	console.log('new num ');
	console.log(num);
	console.log('new num end');
	var wrong_num = parseInt($('.wrong-cell').text());
	// console.log()
	while(wrong_num == num) {
		num = randomAgain(curNum);;
	}
	var html = '<span>' + num + '</span>';
	if(num < wrong_num) {
		$('.cell-item:not(.wrong-cell)').eq(index).addClass('has-num right-cell').html(html);
	} else {
		$('.wrong-cell').addClass('right-cell');
		$('.cell-item').removeClass('wrong-cell');//.addClass('right-cell');
		$('.cell-item:not(.right-cell)').eq(index).addClass('has-num wrong-cell').html(html);
	}
	// $('.right-cell').
	// $('.cell-item:not(.wrong-cell)').eq(index).addClass('has-num').html(html)
}
initCell(16);
insertNum();

handelClick();
timeDown();
function randomAgain(curNum, base) {
	var newNum = Math.ceil(Math.random() * 10) + 1;
	return newNum + curNum;
}


    //分数增加动画
function scoreAnim() {
    var tar = $('body');
    var i = $("<b>").text("+" + 1);
    var y = event.pageY, x = event.pageX;
    console.log('-------');
    console.log(y);
    console.log(i)
    i.css({
        top: y-50,
        left: x,
        "font-size": "24px",
        "font-weight": "400",
        position: "absolute",

        color: "red"
    });
    console.log(i);
    tar.append(i);
    i.animate({
        top: y-150,
        left: x,
        opacity: 0,
        "font-size": "1.4em"
    }, 600,function(){ i.remove(); });

    event.stopPropagation();
}

// error click animate
function errorClickHandle(that) {

	that.animate({
        backgroundColor: "red"
    }, 150, function() {
        var self = that;
        // self.mouseout(function(){
        //     console.log("dd00");
        //     self.css("background", "");
           
        //     event.stopPropagation(); 
        // }); // have a bug 
        setTimeout(function(){
                self.css("background", "");
        },50);
    });
}


 function timeDown(){
 	var now = parseInt($('.time-down').text());
 	var timer = null;
 	if(now > 0) {
	 	timer = setInterval(function() {
	 		$('.time-down').text(now--);
	 		if(now <0 ) {
	 			clearInterval(timer);
	 		}
	 	},1000)
	 }
}
/**
 * 1. 多个对象push进去
 * 2. 增加attr, 点击后改变当前attr,获取新的attr.
 * 3. 
 */

 /*
  * 函数名驼峰
  * 变量名 下划线
  * 
  */