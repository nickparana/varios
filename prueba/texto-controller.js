(function(){

angular.module('myApp')
	.controller('MyController', MyController);	
	
				
function MyController (TextoService,$http){	
	
	var vm = this;
	vm.repetidos=[];
	vm.CheckRepetidos = CheckRepetidos;
	vm.GetURL = GetURL;
	
	vm.texto1="";
	vm.texto2="";
	
	function CheckRepetidos(texto1,texto2){
		
		vm.array1 = TextoService.splitText(texto1);
		vm.array2 = TextoService.splitText(texto2);			
		vm.repetidos = TextoService.buscarRepetidos(texto1,texto2);
		
		vm.EliminarRepetidos = function(){			
			TextoService.eliminarRepetidos(vm.repetidos);
		}
		
		vm.EliminarRepetidos();
     			
	}
	
	
	function GetURL(){
		
		//vm.a = [];
		// https://jsonplaceholder.typicode.com/comments?postId=1&id=2
		//$http.get('https://jsonplaceholder.typicode.com/comments?postId=1&id=5').success(function (data) {vm.a = data;});
		$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', { params: {q:'argentina',begin_date:'20161001'}}).success(function (data) {vm.a = data.response.docs;});
		
	}
}	
})();