angular.module('timeTableApp',[]).controller('timeTableController',function(){
	ttc=this;
	ttc.items=[
		{time:"0600",date:"",items:"item 1"},
		{time:"0700",date:"",items:"item 2"}
	];
	ttc.add=function(){
		ttc.items.push({time:ttc.times, date:"" ,items:ttc.newitems});
		ttc.times="";
		ttc.newitems="";
		alert('add success');
	};
	ttc.set=function(){

		var length = ttc.items.length;
		$('#test').html();
	};
	ttc.calendar=function(){
	}
});

function calendar(){
	var today = new Date();
	var year = today.getFullYear();
	var month = checkDate(today.getMonth());
	var day = checkDate(today.getDate());

    var h = checkDate(today.getHours());
    var m = checkDate(today.getMinutes());
    var s = checkDate(today.getSeconds());

	$('#date').html(day+"-"+month+'-'+year);
	$('#time').html(h+":"+m+":"+s);
	var t = setTimeout(calendar, 1000)
}
function checkDate(i){
	if (i<10)
		i="0"+i;
	return i;
}

$(document).ready(function(){
	calendar();
});