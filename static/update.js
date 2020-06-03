list_hr = []
dtb.ref('/heart_rate').on('value',snap => {if(snap.val()!=list_hr) {
	if(check_char) selectFunc();
	else heart_chart();
	list_hr = snap.val();
	document.getElementById("heart_rate").innerHTML = list_hr[0];}});

dtb.ref('/stress_now').on('value',snap => document.getElementById("stress").innerHTML = snap.val());

 
