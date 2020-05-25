
stress_chart();
//stress now chart
function selectFunc(){
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue==="1"){
		stress_chart();
	}
	else{
		stress_2_chart();
	}
	
}

function stress_2_chart(){
	data_list = []
	dtb.ref('/stress').once('value',snap => {
   if(data_list !== snap.val()){
   data_list = snap.val()
   var data = {
      labels: ["No stress", "Interruption", "Condition"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [data_list['no_stress'],data_list["interruption"],data_list["time_pressure"]]
        }
      ]
    }
    var options= {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted stress in (date)'
      }
    }
    var ctx = document.getElementById("lineChart").getContext("2d");
    var lineChart = new Chart(ctx).Bar(data, options);
   }
});
}
function stress_chart() {
	document.getElementById("selectBox").value=1;
	dtb.ref('/stress').once('value',snap => {
    var data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: "heart",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(249,93,83,1)",
                pointColor: "rgba(249,93,83,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(249,93,83,1)",
        		borderWidth:10,
                data: [20, 3, 5, 7, 101, 130, 170, 19, 23, 29]
            },
            {
                label: "temp",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(185,37,218,1)",
                pointColor: "rgba(185,37,218,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(185,37,218,1)",
                data: [10, 1, 1, 2, 30, 50, 8, 13, 21, 34]
            },
                 {
                label: "stress",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(15,120,255,1)",
                pointColor: "rgba(15,120,255,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(0,0,255,1)",
                data: [0, 1, 10, 2, 3, 5, 80, 13, 21, 34]
            }
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = {};
    var lineChart = new Chart(ctx).Line(data, options);
});}

//heart rate chart
function heart_chart() {
	document.getElementById("selectBox").value=0;
    var data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: "heart",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(249,93,83,1)",
                pointColor: "rgba(249,93,83,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(249,93,83,1)",
        		borderWidth:10,
                data: [20, 3, 5, 7, 11, 13, 17, 19, 23, 29]
            },
            {
                label: "temp",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(185,37,218,1)",
                pointColor: "rgba(185,37,218,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(185,37,218,1)",
                data: [10, 1, 1, 2, 3, 5, 8, 13, 21, 34]
            },
                 {
                label: "stress",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(15,120,255,1)",
                pointColor: "rgba(15,120,255,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(0,0,255,1)",
                data: [0, 1, 10, 2, 3, 5, 80, 13, 21, 34]
            }
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = {};
    var lineChart = new Chart(ctx).Line(data, options);
}