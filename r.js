var rI=function(e){
	var t=0;var n="";
	for(t=0;t<e;t++){
		n+=Math.floor(Math.random()*9)+1
	}
	return n
};

var t=new Date;

var h="-"+rI(5);

document.title+=h