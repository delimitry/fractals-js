//-----------------------------------------------------------------------
// Fractals
//
// Author: delimitry
//-----------------------------------------------------------------------

function checkCanvasIsSupported() {
	canvas = document.getElementById("canvas");
	canvas.width = 480;
	canvas.height = 320;	
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		render();
		//setInterval(render, 100);
	} else {
		alert("Sorry, but your browser doesn't support a canvas.");
	}
}

function render() {
	context.clearRect(0, 0, canvas.width , canvas.height);
	drawMandelbrot(canvas.width , canvas.height);
}

function drawMandelbrot(width, height) {

}
