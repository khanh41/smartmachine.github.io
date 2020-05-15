data_list = []
dtb.ref('/stress').on('value',snap => {
   if(data_list !== snap.val()){
   data_list = snap.val()
   var data = {
      labels: ["No stress", "Interruption", "Condition"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [data_list['no_stress'],data_list["interruption"],data_list["condi"]]
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
