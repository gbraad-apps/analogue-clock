/* 
Copyright (c) 2012 Rüdiger Appel
Copyright (c) 2015 Roger Meier <roger@bufferoverflow.ch>
Copyright (c) 2015 Gerard Braad <me@gbraad.nl>

SPDX-License-Identifier:	MIT
*/

document.addEventListener ('DOMContentLoaded', function() {
	loadSvg("clockface", "assets/clockface.svg");
	setInterval(updateClock, 1000);
}, false);

var loadSvg = function(target, filename) {
	var xhr = new XMLHttpRequest();
        xhr.open("GET", filename, false);
	xhr.send();
	svgDoc = xhr.responseText;
	document.getElementById(target).innerHTML = svgDoc;
}

var updateClock = function() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const millis = now.getMilliseconds();

  rotate('hourHand', hours * 30 + minutes * 0.5);
  rotate('minuteHand', minutes * 6);
  rotate('secondHand', seconds * 6 + (6 * millis / 1000));
};

function rotate(id, angle) {
	var element = document.getElementById(id);
	if (element) {
		element.setAttribute('transform', 'rotate(' + angle + ', 100, 100)');
	}
}
