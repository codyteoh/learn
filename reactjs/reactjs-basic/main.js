var basicApplication=React.createClass({
	render:function(){
		var elapsed=Math.round(this.props.elapsed/10);
		var seconds=elapsed/100+(elapsed % 100 ? '' : '.0');
		var message=' '+ seconds +' ';
		return React.DOM.span(null,message);
	}
});
var basicApplicationFactory = React.createFactory(basicApplication);
var start = new Date().getTime();
function reset(){
	start=new Date().getTime();
	$('#timer').html("0.0");
}
function stop(){
	clearInterval(timer);
	timer=null;
}
var timer=setInterval(function(){
	ReactDOM.render(
		basicApplicationFactory({elapsed:new Date().getTime()-start}),
		document.getElementById('timer')
		);
},100);