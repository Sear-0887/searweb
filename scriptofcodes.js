//namegen
var rollmax, rolltime, pool, rdm1, rdm2, fno, sno, lastnum;
const fn = ["Cool", "Not", "Baked", "Command", "Breath", "Sea", "Sear", "Minecraft", "Pro", "Gamers", "", "Tar", "Undo", "Worker", "Stylelish", "Test", "Index", "Image", "Runner", "Stop", "Unpleased", "Locate", "Hack", "RIP"]
const sn = ["Fake", "LOL", "Potato", "er", "Guy", "Dragon", "Viewer", "Summoner", "Biscuit", "", "Dude", "ri", "Zip", "Already", "People", "Commander", "Running", "Felt", "Smell", "Test", "LMFAO", "People", "Dream", "Up"]
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
    }
}
function load(rdm1 , rdm2) {
	var rolltime = getRandomInt(50)
	var pool = getRandomInt(rolltime)
	var rdm1 = getRandomInt(rollmax);
	var rdm2 = getRandomInt(rollmax);
	document.getElementById("output").innerHTML = "Loading...";

	while (pool>0) {
		console.log("pool: " + pool)
		var rdm1 = getRandomInt(rollmax);
		var rdm2 = getRandomInt(rollmax);
		var fno = fn[(Math.random() * fn.length) | 0]
		var sno = sn[(Math.random() * sn.length) | 0]
		var lastnum = getRandomInt(9999);
		var output = fno + sno + lastnum;
		console.log(output);
		sleepFor(250);
		pool = pool - 1;
	}
	document.getElementById("output").innerHTML = output;
}

//tellrawgen
function make1() {
	console.log ("detecting 1 ..");
	var victim = document.getElementById("victim").value;
	var num1 = document.getElementById("num1").value;
	var sel1 = document.getElementById("sel1").value;
	var text1 = document.getElementById("text1").value;
	var scon1 = document.getElementById("scon1").value;
	var scob1 = document.getElementById("scob1").value;
	console.log(victim + "<-victm");
	console.log(num1 + "<-num1");
	console.log(text1 + "<-text")
	console.log(sel1 + "<-sel");
	console.log(scon1 + "<-scon");
	console.log(scob1 + "<-scob1");
	if (num1=="text") {
		var output = 'tellraw ' + victim + ' {"rawtext":[{"text":"' + text1 + '"}]}'
		document.getElementById("optext").innerHTML = "OUTPUT:"
		document.getElementById("tellrawop").innerHTML = output
		console.log(output)
		return;
	} else if (num1=="selector") {
		var output = 'tellraw ' + victim + ' {"rawtext":[{"selector":"' + sel1 + '"}]}'
		document.getElementById("tellrawop").innerHTML = output
		console.log(output)
		return;
	} else if (num1=="score") {
		var output = 'tellraw ' + victim + ' {"rawtext":[{"score":{"name":"' + scon1 + '","objective":"' + scob1 + '"}}]}'
		document.getElementById("tellrawop").innerHTML = output
		console.log(output)
		return;
	}
	console.log("DONE");
	}