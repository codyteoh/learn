$(document).ready(function(){

});

angular.module('filterApp',[])
.controller('filterController',['$scope','$http','$templateCache',function($scope,$http,$templateCache){
	var afc=this;
	afc.fetch=function(){
		$http({method:'GET',url:'read.json',cache:$templateCache}).
		then(function(response){
			$scope.status=response.status;
			$scope.data=response.data;
			afc.contactlist=$scope.data.list;
			$('#test').html('Database Connection Complete');
			console.log(afc.contactlist)
		}, function(response){
			$scope.data=response.data || "Request Failed";
			$scope.status=response.status;
			$('#test').html('FAILED CONNECTION');
			console.log('failed');
		}
		);
	};
	afc.fetch();
}]);