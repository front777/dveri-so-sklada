$("#next").click(function () {
	$("#slider-photos").animate({ scrollLeft: "+=1000px" }, 400);
});
$("#prew").click(function () {
	$("#slider-photos").animate({ scrollLeft: "-=1000px" }, 400);
});
$("#menu-bar").click(function () {
	$("#burger-menu").css("display", "block");
});
$("#close-bar").click(function () {
	$("#burger-menu").css("display", "none");
});
