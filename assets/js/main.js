$(document).ready(function() {
	$("#btn-uno").click(function(){
		$("#img-uno").css('display', 'block');
		$("#img-dos").css('display', 'none');
		$("#img-tres").css('display', 'none');
		$("#img-cuatro").css('display', 'none');
		$("#img-cinco").css('display', 'none');
	});
	
	$("#btn-dos").click(function(){
		$("#img-uno").css('display', 'none');
		$("#img-dos").css('display', 'block');
		$("#img-tres").css('display', 'none');
		$("#img-cuatro").css('display', 'none');
		$("#img-cinco").css('display', 'none');
	});
	
	$("#btn-tres").click(function(){
		$("#img-uno").css('display', 'none');
		$("#img-dos").css('display', 'none');
		$("#img-tres").css('display', 'block');
		$("#img-cuatro").css('display', 'none');
		$("#img-cinco").css('display', 'none');
	});
	
	$("#btn-cuatro").click(function(){
		$("#img-uno").css('display', 'none');
		$("#img-dos").css('display', 'none');
		$("#img-tres").css('display', 'none');
		$("#img-cuatro").css('display', 'block');
		$("#img-cinco").css('display', 'none');
	});
	
	$("#btn-cinco").click(function(){
		$("#img-uno").css('display', 'none');
		$("#img-dos").css('display', 'none');
		$("#img-tres").css('display', 'none');
		$("#img-cuatro").css('display', 'none');
		$("#img-cinco").css('display', 'block');
	});
	
});