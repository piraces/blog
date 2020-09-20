var start = 3000;
var speed = 250;

function animateTitle(title) {
	var title_ref = window.document.getElementsByTagName('title')[0];
	var i = 0;

	setTimeout(function () {
		setInterval(function () {
			title_ref.text = title.substr(i, title.length) + "    -    " + title.substr(0, i);
			i++;

			if (i === title.length) {
				i = 0;
			}
		}, speed);
	}, start);
}

animateTitle(' 🚂💨💨💨 ');