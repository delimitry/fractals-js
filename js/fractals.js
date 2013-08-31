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
	// visualize the Mandelbrot set
	drawMandelbrot();
}

function drawMandelbrot() {
	// prepare image and pixels
	var image_data = context.createImageData(canvas.width, canvas.height);
	var d = image_data.data;

	max_iterations = 100;
	for (var i = 0; i < canvas.height; i++) {
		for (var j = 0; j < canvas.width; j++) {

			// limit the axis
			x0 = -2.0 + j * 3.0 / canvas.width;		// (-2, 1)
			y0 = -1.0 + i * 2.0 / canvas.height;	// (-1, 1)

			x = 0;
			y = 0;
			iteration = 0;

			while ((x * x + y * y < 4) && (iteration < max_iterations)) {
				x_n = x * x - y * y + x0;
				y_n = 2 * x * y + y0;
				x = x_n;
				y = y_n;
				iteration++;
			}

			// set pixel color [r,g,b,a]
			d[i * canvas.width * 4 + j * 4 + 0] = iteration*15;
			d[i * canvas.width * 4 + j * 4 + 1] = iteration*3;
			d[i * canvas.width * 4 + j * 4 + 2] = iteration*5;
			d[i * canvas.width * 4 + j * 4 + 3] = 255;
		}		
	}

	// draw image
	context.putImageData(image_data, 0, 0);	
}
