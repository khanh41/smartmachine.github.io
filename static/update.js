list_hr = []
list_str = []
list_line =[]
dtb.ref('/line').on('value',snap => {if(snap.val()!=list_line) {
	list_line = snap.val();
	if(check_char) selectFunc();
	else heart_chart();
	dtb.ref('/heart_rate').once('value',snap => {
		list_hr = snap.val();
		document.getElementById("heart_rate").innerHTML = list_hr[list_hr.length-1];});

	dtb.ref('/stress_now').once('value',snap => document.getElementById("stress").innerHTML = snap.val());
	}
});
 
dtb.ref('/stress').on('value',snap => {if(snap.val()!=list_str) {
	list_str = snap.val();
	if(check_char) selectFunc();
	else heart_chart();
	dtb.ref('/heart_rate').once('value',snap => {
		list_hr = snap.val();
		document.getElementById("heart_rate").innerHTML = list_hr[0];});

	dtb.ref('/stress_now').once('value',snap => document.getElementById("stress").innerHTML = snap.val());
	}
});
dtb.ref('/time_update').on('value',snap => {
	document.getElementById("time_update").innerHTML = snap.val();
});