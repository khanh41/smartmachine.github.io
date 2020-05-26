dtb.ref('/heart_rate/0').on('value',snap => {if(snap.val()!==0) document.getElementById("heart_rate").innerHTML = snap.val();});

dtb.ref('/stress_now').on('value',snap => document.getElementById("stress").innerHTML = snap.val());

 
