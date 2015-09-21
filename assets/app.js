/* 
Copyright (c) 2012 Rüdiger Appel
Copyright (c) 2015 Roger Meier <roger@bufferoverflow.ch>
Copyright (c) 2015 Gerard Braad <me@gbraad.nl>

SPDX-License-Identifier:	MIT
*/

document.addEventListener ('DOMContentLoaded', function() {
	loadSvg("clockface", "assets/clockface.svg");
	setInterval(tick, 50);
}, false);

var loadSvg = function(target, filename) {
	var xhr = new XMLHttpRequest();
        xhr.open("GET", filename, false);
	xhr.send();
	svgDoc = xhr.responseText;
	document.getElementById(target).innerHTML = svgDoc;
}

var tick = function() {
	var now     = new Date();
	var hours   = now.getHours();
	var minutes = now.getMinutes();
	var time    = Math.min(60000, 1.025 * (1000 * now.getSeconds() + now.getMilliseconds()));
	var seconds = Math.floor(time / 1000);
	var millis  = time % 1000;
	rotate('hourHand',   hours * 30 + minutes * 0.5);
	rotate('minuteHand', minutes * 6);
	rotate('secondHand', 6 * seconds + 3 * (1 + Math.cos(Math.PI + Math.PI * (0.001 * millis))));
};

function rotate(id, angle) {
	var element = document.getElementById(id);
	if (element) {
		element.setAttribute('transform', 'rotate(' + angle + ', 100, 100)');
	}
}
