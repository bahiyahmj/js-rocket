var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' +state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;


	// countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber <=0) {
				changeState(3);
			}
		}, 500);
	} else if (state == 3) {
		var success = timer = setTimeout(function ()
			{
				var randomNumber = Math.round(Math.random()*10)
				
				console.log('randomNumber:', randomNumber)

				// success
				if (randomNumber > 5) {
					changeState(4);
				} else {
					changeState(5); // oh no!
				}
		}, 2000);
	};

}