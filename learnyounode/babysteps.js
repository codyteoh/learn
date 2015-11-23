(function sumabc(){

	var empty="";
	var count=0;
	var summation=0;
	process.argv.forEach(function(process){
		if (count<2){
			count++;
		}else{
			summation+=Number(process);
		}
	});
	console.log(summation);
})();