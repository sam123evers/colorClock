
var clock = document.getElementById('time');
var color = document.getElementsByClassName('colorFilm')





var hexClock = function() {
	var d = new Date()
	var hrs = d.getHours().toString()
	var min = d.getMinutes().toString()
	var sec = d.getSeconds().toString()

	if(hrs.length < 2) {
		hrs = '0' + hrs
	}
	if(min.length < 2) {
		min = '0' + hrs
	}
	if(sec.length < 2) {
		sec = '0' + sec
	}

	var clockString = hrs + ':' + min + ':' + sec

	var colorString = '#' + sec + hrs + min

	clock.textContent = clockString

	var colorChangeMagic = document.querySelector('.colorFilm')

	colorChangeMagic.style.background = colorString

}

hexClock()
setInterval(hexClock, 1000)





