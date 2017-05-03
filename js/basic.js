$(document).ready(function () {
	var list = $('#weatherList');
	var curCity = '';
	var curPosition = '';
	//获取当前位置
	(function () {
		var map = new BMap.Map("allmap");
		function myFun(result){
			// curCity = result.name.replace('市','');
			curPosition = result.name.slice(0,-1);
		}
		var myCity = new BMap.LocalCity();
		myCity.get(myFun);
	})()
	//缓冲弹层
	$('#mask').css({'display' : 'none'});
	//导航头点击
	$('#nav-header').on('click',function () {
		$('.nav li').removeClass('active')
		$('.nav li:first').addClass('active')
	});
	//小屏市导航点击消失
	$('.navbar-nav a').on('click',function() {
		$('#my-navbar-collapse').removeClass('in')
	});
	//天气查询
	$('.query').on('click',function () { 
		if($('#cityName').val() == ''){
			curCity = curPosition
		}else{
			curCity = $('#cityName').val()
		}
		console.log($('#cityName').val() == '')
		var pm25 = '';
		var weather = [];
		list.empty();
		$.getJSON({
			url: 'http://api.asilu.com/weather/',
			data: {
				city: curCity
			},
			dataType: 'jsonp',
			success: function (data) {			
				pm25 = data.pm25;
				weather = data.weather;
				list.append(`<li class="list-group-item">${data.city}</li>`);
				$.each(weather,function (index,val) {
					var date = val.date;
					var icon1 = val.icon1;
					var icon2 = val.icon2;
					var temp = val.temp;
					var weather = val.weather;
					var wind = val.wind;
					list.append(`<li class="list-group-item">
								<div><span>${date}</span></div>
								<div><span>${icon1}</span></div>
								<div><span>${icon2}</span></div>
								<div><span>${temp}</span></div>
								<div><span>${weather}</span></div>
								<div><span>${wind}</span></div>
							</li>`);
				})
			}
		});
	});
	$("[data-toggle='tooltip']").tooltip();
})




