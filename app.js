window.addEventListener("load", function() {
	var button = document.getElementById("calcular");
	button.addEventListener("click", function() {
		var ingresoSegundos = parseInt(document.getElementById("ingresoSegundos").value);
		
		function randonColor(){
			document.body.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
		}

		setInterval(randonColor, ingresoSegundos * 1000);
   		document.getElementById("ingresoSegundos").value="";		
	});
});


