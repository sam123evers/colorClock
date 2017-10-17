//here we grab <h1> theTime and store it as a variable called clock
var clock = document.getElementById('theTime');
//next we grab the <div> colorFilm and store it as a variable called colorFilm
var colorFilm = document.getElementById('colorFilm')
//here we declare a function called hexClock
var theHexCode = document.getElementById('theHexCode')
var hexClock = function() {
	//we get a new Date object and store it as a variable called d
	var d = new Date()
	//we set hours minutes and seconds as variables
	var hrs = d.getHours().toString()
	var min = d.getMinutes().toString()
	var sec = d.getSeconds().toString()
	
	if(hrs.length < 2) {
		hrs = "0" + hrs
	}

	if(min.length < 2) {
		min = "0" + min
	}

	if(sec.length < 2) {
		sec = "0" + sec
	}
	
	//we set the hours minutes and seconds variables with colons in between them
	//and store that as a variable called clockString
	
	var clockString =   hrs + ':' + min + ':' + sec
	
	clock.textContent = clockString

	if (hrs.toString().startsWith("2")) {
		hrs = "ff"
	}

	if (hrs.toString().startsWith("1")) {
		hrs = "e4"
	}

	if (hrs.toString().startsWith("0")) {
		hrs = "#cc"
	}

	var hexString = "#" + hrs + min + sec
		
	colorFilm.style.background = hexString.toString(16)

	theHexCode.textContent = hexString.toString(16)

	clock.onmouseover = function() {
		clock.style.opacity = 0
		theHexCode.style.opacity = 1
		console.log('onmouseover')
	}

	clock.onmouseout = function() {
		clock.style.opacity = 1
		theHexCode.style.opacity = 0
	}




}



hexClock()
setInterval(hexClock, 1000)





