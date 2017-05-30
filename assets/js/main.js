/*$(document).ready(function() {
	
	$("#btn-uno").click(function(){
		$("#img-uno").css('display', 'block');
		$("#img-dos").hide();
		$("#img-tres").hide();
		$("#img-cuatro").hide();
		$("#img-cinco").hide();
	});
	
	$("#btn-dos").click(function(){
		$("#img-uno").hide();
		$("#img-dos").css('display', 'block');
		$("#img-tres").hide();
		$("#img-cuatro").hide();
		$("#img-cinco").hide();
	});
	
	$("#btn-tres").click(function(){
		$("#img-uno").hide();
		$("#img-dos").hide();
		$("#img-tres").css('display', 'block');
		$("#img-cuatro").hide();
		$("#img-cinco").hide();
	});
	
	$("#btn-cuatro").click(function(){
		$("#img-uno").hide();
		$("#img-dos").hide();
		$("#img-tres").hide();
		$("#img-cuatro").css('display', 'block');
		$("#img-cinco").hide();
	});
	
	$("#btn-cinco").click(function(){
		$("#img-uno").hide();
		$("#img-dos").hide();
		$("#img-tres").hide();
		$("#img-cuatro").hide();
		
		$("#img-cinco").css('display', 'block');
	});
	
});*/

$(document).ready(function () {
    
    $(".ocultarImagen").not("#imgUno").hide();


    $("#btnUno").click(function () {
        $("#imgUno").fadeIn("slow");
        $(".ocultarImagen").not("#imgUno").fadeOut();
    });

    $("#btnDos").click(function () {
        $("#imgDos").fadeIn("slow");
        $(".ocultarImagen").not("#imgDos").fadeOut();
    });

    $("#btnTres").click(function () {
        $("#imgTres").fadeIn("slow");
        $(".ocultarImagen").not("#imgTres").fadeOut();
    });

    $("#btnCuatro").click(function () {
        $("#imgCuatro").fadeIn("slow");
        $(".ocultarImagen").not("#imgCuatro").fadeOut();
    });

    $("#btnCinco").click(function () {
        $("#imgCinco").fadeIn("slow");
        $(".ocultarImagen").not("#imgCinco").fadeOut();
    });
	
});

