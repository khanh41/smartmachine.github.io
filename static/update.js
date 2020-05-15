dtb.ref('/heart_rate/temp_heart').on('value',snap => {if(snap.val()!==0) document.getElementById("heart_rate").innerHTML = snap.val();});

dtb.ref('/stress/temp_stress').on('value',snap => document.getElementById("stress").innerHTML = snap.val());

 
