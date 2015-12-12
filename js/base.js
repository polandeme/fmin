
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

// 得到两个随机数， 初始化
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
function initInsertNum() {
	$('.cell-item').html('').removeClass('has-num right-cell wrong-cell');
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
// 取消监听事件 
function unbindHandleClick() {
	$('body').off('click', '.right-cell');
	$('body').off('click', '.cell-item:not(.right-cell)');
	// $('body').off('click', '.cell-item'); // ???
}

// 
function reDraw(curNum) {
	var n = n || 15;
	var index = Math.floor(Math.random() * n);
	var num = Math.floor(Math.random() * 10);
	// var curNum = parseInt($('.right-cell').text());
	var num = randomAgain(curNum);
	var wrong_num = parseInt($('.wrong-cell').text());

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
}
initCell(16);
initInsertNum();

// 新数字生成策略
function randomAgain(curNum, base) {
	var newNum = Math.ceil(Math.random() * 10) + 1;
	return newNum + curNum;
}

// 分数增加动画
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
        setTimeout(function(){
                self.css("background", "");
        },50);
    });
}

//倒计时模块
function timeDown(){
 	var now = parseInt($('.time-down').text()) || 60;
 	var timer = null;
 	if(now > 0) {
	 	timer = setInterval(function() {
	 		$('.time-down').text(--now);
	 		if(now <= 0 ) {
	 			clearInterval(timer);
	 			unbindHandleClick();
	 		}
	 	},1000)
	 }
}

// 点击开始
$(".start-btn").on('click', start);
function start(e) {
	if($(this).data('restart')) {
		initInsertNum();
	}
	timeDown();
	handelClick();
	$(this).data('restart', '1');
	e.stopPropagation();
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