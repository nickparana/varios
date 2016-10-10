(function(){

angular
	.module('myApp')
	.service('TextoService',TextoService);	

function TextoService($filter){

	this.splitText = splitText;
	this.buscarRepetidos = buscarRepetidos;
	this.eliminarRepetidos = eliminarRepetidos;
	
	function splitText(text) {
		return text.match(/([a-zñáéíóúâêîôûäëïöüàèìòù-]{3,})\w+/ig);		
	}
	
	function eliminarRepetidos(a){
		
		for (var i = 0;i<(a.length-1);i++){
			for (var j = (i+1);j<a.length;j++){
				if (a[i]===a[j]){
					a.splice(j,1);
					j--;
				}
			}			
		}		
	}
	
	function buscarRepetidos(texto1, texto2) {
		
		var array1 = this.splitText(texto1);
		var array2 = this.splitText(texto2);	
		
		var repetidos = [];
		
		
		for(var i = 0;i<array1.length;i++){			
			for (var j = 0;j<array2.length;j++){
				if (array1[i]===array2[j]){					
					repetidos.push(array1[i]);
				}
			}
		}
		
		return repetidos;		
	}
	
	
	
}	
})();
	
	
	

