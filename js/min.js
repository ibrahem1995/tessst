$(function () {
	//Adjust Slider Hight
var winH    = $(window).height(),
    upperH  = $('.upper-bar').innerHeight(),
    navH    =$('.navbar').innerHeight();
    

$('.slider , .carousel-item').height(winH - (upperH + navH ));

//featured work shuffle
$('.featuerd ul li').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active');
	//console.log($(this).data('class'));
if ($(this).data('class') === '.All'){
		$('.shaffle-imags .col-md').css('opacity', 1);
	}else{$('.shaffle-imags .col-md').css('opacity', '.08');
	     $($(this).data('class')).parent().css('opacity', 1);

	}
});

}); 



