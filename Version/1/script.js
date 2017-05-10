angular.module('App', []).controller('CrudCtrl', ['$scope',
	function($scope) {
	  $scope.Grupo = [
	      {
	        nombre : "Jose Alberto Mendoza",
	        id : "37208",
	        proyecto : "Salesforce",
	        editable : false
	      },
	      {
	        name : "Angel Diaz Pini",
	        id : "37201",
	        proyecto : "Salesforce",
	        editable : false
	      }
	      {
	        name : "",
	        id : "",
	        proyecto : "",
	        editable : true
	      }
	    ];
	 
	 $scope.participante = {}
	    
	 $scope.edit = function(index){
	   $scope.participante = $scope.Grupo[index];
	   $scope.participante.index = index;
	   $scope.participante.editable = true;
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
	}
]);