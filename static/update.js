dtb.ref('/heart_rate/temp_heart').on('value',snap => {if(snap.val()!==0) document.getElementById("heart_rate").innerHTML = snap.val();});

dtb.ref('/temperature/temperature_1').on('value',snap => document.getElementById("temperature").innerHTML = snap.val());

dtb.ref('/stress/stress_1').on('value',snap => document.getElementById("stress").innerHTML = snap.val());

//send to firebase: %stress
var stress_1_value=0;
var stress_2_value=0; 
var obj_value;
dtb.ref('/stress/').once('value')
  .then(snapshot => {
    obj_value = snapshot.val();
  }).then(response => {
        firebase.database().ref('stress/').set({
         //   stress_3: obj_value["stress_2"],
           // stress_2: obj_value["stress_1"],
           // stress_1 : obj_value["stress_1"]+5
          })});

 
