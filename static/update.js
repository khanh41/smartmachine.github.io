dtb.ref('/heart_rate/temp_heart').on('value',snap => {if(snap.val()!==0) document.getElementById("heart_rate").innerHTML = snap.val();});

dtb.ref('/temperature/temperature_1').on('value',snap => document.getElementById("temperature").innerHTML = snap.val());

dtb.ref('/stress/stress_1').on('value',snap => document.getElementById("stress").innerHTML = snap.val());

 
