function displayLineChart() {
    var data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: "heart",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(210,0,0,1)",
                pointColor: "rgba(210,0,0,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(210,0,0,1)",
        		borderWidth:10,
                data: [20, 3, 5, 7, 11, 13, 17, 19, 23, 29]
            },
            {
                label: "temp",
                fillColor: "rgba(255,255,255,0)",
                strokeColor: "rgba(135,0,165,1)",
                pointColor: "rgba(135,0,165,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(135,0,165,1)",
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
