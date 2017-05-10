angular.module('App', []).controller('ListaCtrl', ['$scope',
	function($scope) {
	  $scope.Grupo = [
	      {
	        nombre : "Jose Alberto Mendoza",
	        id : "37208",
	        proyecto : "Salesforce",
	        editable : false
	      },
	      {
	        nombre : "Angel Diaz Pini",
	        id : "37201",
	        proyecto : "Salesforce",
	        editable : false
	      }
	    ];
	 
	 $scope.persona = {}
	    
	 $scope.edit = function(index){
	   $scope.persona = $scope.Grupo[index];
	   $scope.persona.index = index;
	   $scope.persona.editable = true;
	 }
	    
	 $scope.delete = function(index){
	   $scope.Grupo.splice(index,1);
	 }
	    
	 $scope.save = function(index){
	   $scope.Grupo[index].editable = false;
	   
	 }
	    
	 $scope.add = function(){
	   $scope.Grupo.push({
	    nombre : "",
        id : "",
        proyecto : "",
        editable : true
	   })
	 }
	 $scope.porcentaje = function(){
	 	var total = 100*((Grupo.length)/16);
	 	return total;
	 }
	}
]);