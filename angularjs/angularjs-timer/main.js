angular.module('timerApp',[])
.controller('timerController',['$scope','$interval',function($scope,$interval){
	var tc = this;
	$scope.format ="M/d/yy h:mm:ss a";
	$scope.blood_1=100;
	$scope.blood_2=120;
	var stop;
	$scope.fight=function(){
		if (angular.isDefined(stop))return;
		stop = $interval(function(){
			if($scope.blood_1>0 && $scope.blood_2>0){
				$scope.blood_1=$scope.blood_1-3;
				$scope.blood_2=$scope.blood_2-4;
			}else{
				$scope.stopFight();
			}
		},100);
	};
	$scope.stopFight=function(){
		if (angular.isDefined(stop)){
			$interval.cancel(stop);
			stop=undefined;
		}
	};
	$scope.resetFight=function(){
		$scope.blood_1=100;
		$scope.blood_2=120;
	};
	$scope.$on('destroy',function(){
		$scope.stopFight();
	});
}])
.directive('myCurrentTime',['$interval','dateFilter',function($interval,dateFilter){
	return function(scope,element,attrs){
		var format,stopTime;
		function updateTime(){
			element.text(dateFilter(new Date(),format));
		}
		scope.$watch(attrs.myCurrentTime,function(value){
			format=value;
			updateTime();
		});
		stopTime=$interval(updateTime,1000);
		element.on('$destroy',function(){
			$interval.cancel(stopTime);
		});
	}
}])
