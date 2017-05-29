/*jQuery(document).ready(function() {
	alert("Soy una alerta con jQuery");
});*/

/*$(document).ready(function(){
	$("button").click(function(){
		$("#saludo").append("Hola soy un saludo con jQuery");
	})
})*/


$(document).ready(function() {
	$("button").click(function(){
		$("ul").append("<li>Más comida con jQuery</li>")
	})
})