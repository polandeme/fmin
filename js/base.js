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

initCell(16);
insertNum();
function insertNum() {
	var index_one = Math.floor(Math.random() * 16);
	var index_two = Math.floor(Math.random() * 16);
	while(index_two === index_one) {
		index_two = Math.floor(Math.random() * 16);
	}
	var randomNum = getRandomNum();
	$('.cell-item').eq(index_one).html('<span>' + randomNum.num_one + '</span>');
	$('.cell-item').eq(index_two).html('<span>' + randomNum.num_two + '</span>');
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