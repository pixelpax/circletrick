define(function(require){
		var Donut = require('./donut');
		var canvas = document.getElementById('theCanvas');
		var c = canvas.getContext('2d');
		d = new Donut(c, 10, 20, 'black', 'gray');
		alert(d);
		// c.fillStyle = "skyblue";
		// c.fillRect(0,0,canvas.width,canvas.height);

		// //test code to make a masking operation
		// var maskCanvas = document.createElement('canvas');
		// maskCanvas.width = canvas.width;
		// maskCanvas.height = canvas.height;
		// var maskCtx = maskCanvas.getContext('2d');

		// maskCtx.fillStyle = "black";
		// maskCtx.fillRect(0,0, maskCanvas.width, maskCanvas.height);
		// maskCtx.globalCompositeOperation = 'xor';
		// maskCtx.arc(30,30,10,0,2*Math.PI);
		// maskCtx.fill();
		// c.drawImage(maskCanvas,0,0);
});