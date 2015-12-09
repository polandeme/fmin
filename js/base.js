// var Cell = {
// 	i,
// 	j,
// 	value,
// 	available
// }
//初始化cell
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
	$(this).html('').removeClass('has-num right-cell');
		reDraw();
		console.log('is right');
	});
	$('body').on('click', '.cell-item:not(.right-cell)', function() {
		console.log('is wrong');
	})
}

// 
function reDraw(n) {
	var n = n || 15;
	var index = Math.floor(Math.random() * n);
	var num = Math.floor(Math.random() * 10);
	var wrong_num = parseInt($('.wrong-cell').text());
	console.log(wrong_num);
	// console.log()
	while(wrong_num == num) {
		console.log(num);
		num = Math.floor(Math.random() * 10);
	}
	var html = '<span>' + num + '</span>';
	if(num < wrong_num) {
		$('.cell-item:not(.wrong-cell)').eq(index).addClass('has-num right-cell').html(html);
	} else {
		$('.wrong-cell').addClass('right-cell');
		$('.cell-item').removeClass('wrong-cell');//.addClass('right-cell');
		$('.cell-item:not(.wrong-cell)').eq(index).addClass('has-num wrong-cell').html(html);
	}
	// $('.right-cell').
	// $('.cell-item:not(.wrong-cell)').eq(index).addClass('has-num').html(html)
}
initCell(16);
insertNum();

handelClick();
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