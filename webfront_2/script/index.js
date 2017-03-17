//轮播DOM
var main_swing = document.querySelector('.main_swing');

var img_position = 0;

var swing_tittle_list = document.querySelectorAll('.swing_img_info_tittle');
var swing_detail_list = document.querySelectorAll('.swing_img_info_detail');
var swing_readmore_list = document.querySelectorAll('.swing_img_info_readmore');

var swing_dot_ul = document.querySelector('.bottom_banner_swing_dot_list');
var swing_dot_list = document.querySelectorAll('.bottom_banner_swing_dot_list > li');

window.onload = function() {
	swing();
}

// 轮播函数
function swing() {

	init_css();

	var swing_time = setInterval(function() {


		if (img_position == 0) {

			move_out_css();

			main_swing.style.right = 1440 + 'px';
			img_position = 1;

			move_in_css();

		} else if (img_position == 1) {

			move_out_css();

			main_swing.style.right = 2880 + 'px';
			img_position = 2;

			move_in_css();

		} else if (img_position == 2) {

			move_out_css();

			main_swing.style.right = 4320 + 'px';
			img_position = 3;

			move_in_css();

		} else if (img_position == 3) {

			move_out_css();

			img_position = 0;
			main_swing.style.right = 0;

			move_in_css();
		}

	}, 6000);

};

//li相关函数
swing_dot_ul.addEventListener('click', function() {

	if (event.target.getAttribute('dot') == img_position) {

		return;

	} else if(event.target.nodeName == "LI" && event.target.getAttribute('dot') != img_position){

		img_position = event.target.getAttribute('dot');
		change_img(img_position);
	};

});
swing_dot_ul.addEventListener('mouseover', function() {

	if (event.target.nodeName == "LI" && event.target.getAttribute('dot') != img_position) {
		event.target.style.setProperty('background-color', 'rgba(41,35,25,.7)');
	};

});
swing_dot_ul.addEventListener('mouseout', function() {

	if (event.target.nodeName == "LI" && event.target.getAttribute('dot') != img_position) {
		event.target.style.setProperty('background-color', 'rgba(41,35,25,1)');
	};

});

//初始化
function init_css() {

	swing_dot_list[img_position].style.setProperty('background-color', 'rgba(250,35,87,1)');

	var init_tittle = setTimeout(function() {

		swing_tittle_list[img_position].style.setProperty('color', 'rgba(255,255,255,1)');
		swing_tittle_list[img_position].style.setProperty('right', '0');
		swing_tittle_list[img_position].style.setProperty('text-shadow', '1px 1px 5px rgba(0,0,0,1)');

	}, 700);

	var init_detail = setTimeout(function() {

		swing_detail_list[img_position].style.setProperty('color', 'rgba(255,255,255,1)');
		swing_detail_list[img_position].style.setProperty('left', '0');
		swing_detail_list[img_position].style.setProperty('text-shadow', '1px 1px 5px rgba(0,0,0,1)');
		swing_detail_list[img_position].style.setProperty('border-left', '1px solid rgba(50,44,32,1)');

	}, 1100);

	var init_readmore = setTimeout(function() {

		swing_readmore_list[img_position].style.setProperty('color', 'rgba(250,35,87,1)');
		swing_readmore_list[img_position].style.setProperty('left', '300px');

	}, 1100);

}

//滑入样式
function move_in_css() {

	swing_dot_list[img_position].style.setProperty('background-color', 'rgba(250,35,87,1)');

	var init_tittle = setTimeout(function() {

		swing_tittle_list[img_position].style.setProperty('color', 'rgba(255,255,255,1)');
		swing_tittle_list[img_position].style.setProperty('right', '0');
		swing_tittle_list[img_position].style.setProperty('text-shadow', '1px 1px 5px rgba(0,0,0,1)');

	}, 1100);

	var init_detail = setTimeout(function() {

		swing_detail_list[img_position].style.setProperty('color', 'rgba(255,255,255,1)');
		swing_detail_list[img_position].style.setProperty('left', '0');
		swing_detail_list[img_position].style.setProperty('text-shadow', '1px 1px 5px rgba(0,0,0,1)');
		swing_detail_list[img_position].style.setProperty('border-left', '1px solid rgba(50,44,32,1)');

	}, 1500);

	var init_readmore = setTimeout(function() {

		swing_readmore_list[img_position].style.setProperty('color', 'rgba(250,35,87,1)');
		swing_readmore_list[img_position].style.setProperty('left', '300px');

	}, 1500);
}

//清空样式
function move_out_css() {

	for (var i = 0; i <= 3; i++) {

		swing_dot_list[i].style.setProperty('background-color', 'rgba(41,35,25,1)');

		swing_tittle_list[i].style.setProperty('color', 'rgba(255,255,255,0)');
		swing_tittle_list[i].style.setProperty('right', '100px');
		swing_tittle_list[i].style.setProperty('text-shadow', '1px 1px 5px rgba(0,0,0,0)');

		swing_detail_list[i].style.setProperty('color', 'rgba(255,255,255,0)');
		swing_detail_list[i].style.setProperty('left', '100px');
		swing_detail_list[i].style.setProperty('text-shadow', '1px 1px 5px rgba(0,0,0,0)');
		swing_detail_list[i].style.setProperty('border-left', '1px solid rgba(50,44,32,0)');

		swing_readmore_list[i].style.setProperty('color', 'rgba(250,35,87,0)');
		swing_readmore_list[i].style.setProperty('left', '200px');
	};
}

//切换
function change_img(num) {

	if (num == 0) {

		move_out_css();
		move_in_css();
		main_swing.style.right = 0 + 'px';
		img_position = num;


	} else if (num == 1) {

		move_out_css();

		main_swing.style.right = 1440 + 'px';
		img_position = num;

		move_in_css();

	} else if (num == 2) {

		move_out_css();

		main_swing.style.right = 2880 + 'px';
		img_position = num;

		move_in_css();

	} else if (num == 3) {

		move_out_css();

		main_swing.style.right = 4320 + 'px';
		img_position = num;

		move_in_css();

	};
}