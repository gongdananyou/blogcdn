function pjax_fancybox() {
	$(".article-entry").find("img").not('.inline').not('a img').each(function() { //渲染 fancybox
		var element = document.createElement("a"); // a 标签
		$(element).attr("pjax-fancybox", ""); // 过滤 pjax
		$(element).attr("href", $(this).attr("src"));
		if ($(this).attr("data-original")) {
			$(element).attr("href", $(this).attr("data-original"));
		}
		$(element).attr("data-fancybox", "images");
		var caption = ""; // 描述信息
		if ($(this).attr('alt')) { // 标准 markdown 描述信息
			$(element).attr('data-caption', $(this).attr('alt'));
			caption = $(this).attr('alt');
		}
		var div = document.createElement("div");
		$(div).addClass("fancybox");
		$(this).wrap(div); // 最外层套 div ，其实主要作用还是 class 样式
		var span = document.createElement("span");
		$(span).addClass("image-caption");
		$(span).text(caption); // 加描述
		$(this).after(span); // 再套一层描述
		$(this).wrap(element); // 最后套 a 标签
	}) $(".article-entry").find("img").fancybox({
		selector: '[data-fancybox="images"]',
		hash: false,
		loop: false,
		closeClick: true,
		helpers: {
			overlay: {
				closeClick: true
			}
		},
		buttons: ["zoom", "close"]
	});
};
$(function() {
	pjax_fancybox();
});
