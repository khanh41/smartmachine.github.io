window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	axisY:{
		includeZero: false
	},

	data: [{        
		type: "line",
		dataPoints: [
			{ y: 45 },
			{ y: 41},
			{ y: 52},
			{ y: 46 },
			{ y: 45 },
			{ y: 50 },
			{ y: 48 },
			{ y: 48 },
			{ y: 41 },
			{ y: 50 },
			{ y: 48 },
			{ y: 40 }
		]
        
	}],
});
chart.render();
window.myLine.update();
}

