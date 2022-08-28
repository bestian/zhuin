$(document).ready(function () {
	var h = document.body.innerHTML;
	h = h.replace(/唐宗浩/g, '某甲');
	h = h.replace(/唐鳳胞弟/g, '某甲');
	h = h.replace(/唐鳳的胞弟/g, '某甲');
	h = h.replace(/唐鳳的弟弟/g,  '某甲');
	h = h.replace(/唐鳳弟弟/g,  '某甲');
	h = h.replace(/唐鳳/g,  '某乙');
	document.body.innerHTML = h;

	var t = $("title").text();
	t = t.replace(/唐宗浩/g, '某甲');
	t = t.replace(/唐鳳胞弟/g, '某甲');
	t = t.replace(/唐鳳的胞弟/g, '某甲');
	t = t.replace(/唐鳳的弟弟/g,  '某甲');
	t = t.replace(/唐鳳弟弟/g,  '某甲');
	t = t.replace(/唐鳳/g,  '某乙');
	$("title").text(t);

})
