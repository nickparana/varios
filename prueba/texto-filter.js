(function(){

angular
	.module('myApp')
	.filter('highlight', function($sce) {
      return function(text, palabrasRepetidas) {
      if(palabrasRepetidas.length>0) {
        
        for (var i = 0; i < palabrasRepetidas.length; i++){          
          var pattern = new RegExp(palabrasRepetidas[i], "g");
          text = text.replace(pattern, '<span class="highlighted">' + palabrasRepetidas[i] + '</span>');
        }       
        
        return text;
      }
      else {
        return text;
      }
    };
  });

})();