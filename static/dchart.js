
stress_chart();
var ctx;
//stress now chart
function selectFunc(){
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	document.getElementById("tail").style.visibility = "visible";
	document.getElementById("tail1").style.visibility = "visible";
    if(selectedValue==="1"){
		stress_chart();
	}
	else{
		stress_2_chart();
	}
	
}

function stress_2_chart(){
	data_list = []
	dtb.ref('/stress/').once('value',snap => {
   if(data_list !== snap.val()){
   data_stress = snap.val();
   data_itr =[]
	data_no =[]
	data_tp =[]
	for(var i=2;i>=0;i--){
		data_itr[i]=data_stress["stress"+i]["interruption"]
		data_no[i]=data_stress["stress"+i]["no_stress"]
		data_tp[i]=data_stress["stress"+i]["time_pressure"]
	}
	if(ctx!=undefined) ctx.destroy();
   ctx = new Chart(document.getElementById("lineChart"), {
    type: 'bar',
    data: {
      labels: ["2 days ago", "1 day ago", "now"],
      datasets: [
        {
          label: "NS",
          backgroundColor: "#0000FF",
          data: data_no
        }, {
          label: "ITR",
          backgroundColor: "#F95D53",
          data: data_itr
        },{
          label: "TPS",
          backgroundColor: "#B925DA",
          data: data_tp
        }
      ]
    },
    options: {
		legend: {
        display: false
    },
		scales: {
                xAxes: [{
                    id: 'x-axis-1',
                }],
                yAxes: [{
                    id: 'y-axis-1',
                    ticks: {beginAtZero: true}
                }]
            }                
        }
});}
});
}
function stress_chart() {
	document.getElementById("tail").style.visibility = "visible";
	document.getElementById("tail1").style.visibility = "visible";
	document.getElementById("heart_rate1").innerHTML = "ITR";
	document.getElementById("selectBox").value=1;
	dtb.ref('/line').once('value',snap => {
	data_stress = snap.val();
	data_itr =[]
	data_no =[]
	data_tp =[]
	for(var i=9;i>=0;i--){
		data_itr[i]=data_stress[i+1]["itr"]
		data_no[i]=data_stress[i+1]["no_stress"]
		data_tp[i]=data_stress[i+1]["tp"]
	}
	if(ctx!=undefined) ctx.destroy();
    ctx = new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: [5,4.5,4,3.5,3,2.5,2,1.5,1,0.5],
    datasets: [{ 
        data: data_no,
        label: "NS",
        borderColor: "#0000FF",
		backgroundColor:"#0000FF",
        fill: false
      }, { 
        data: data_itr,
        label: "ITR",
        borderColor: "#F95D53",
		backgroundColor:"#F95D53",
        fill: false
      }, { 
        data: data_tp,
        label: "TPS",
        borderColor: "#B925DA",
		backgroundColor:"#B925DA",
        fill: false
      }
    ]
  },
  options: {
	  legend: {
        display: false
    },
	  maintainAspectRatio: false,
    title: {
      display: true,
      text: '5 hours ago'
    }
  }
});
});}

//heart rate chart
function heart_chart() {
	document.getElementById("tail").style.visibility = "hidden";
	document.getElementById("tail1").style.visibility = "hidden";
	document.getElementById("heart_rate1").innerHTML = "HR";
	document.getElementById("selectBox").value=0;
	dtb.ref('/heart_rate').once('value',snap => {
	heart_data = snap.val();
	heart_data=heart_data.map(parseFloat);
	labels=[];
	labels[0]=2;
	labels[heart_data.length-1]=0;
	for(var i=1;i<heart_data.length-1;i++){
		labels[i]='-';
	}
	if(ctx!=undefined) ctx.destroy();
    ctx = new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{ 
        data: heart_data,
        borderColor: "#F95D53",
		backgroundColor:"#F95D53",
        fill: false
      }
    ]
  },
  options: {
	  legend: {
        display: false
    },
	  maintainAspectRatio: false,
    title: {
      display: true,
      text: '2 minutes ago'
    }
  }
});
});}