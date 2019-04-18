// JavaScript Document
'use strict';

var applicationTitle = 'iop - javascript';

var applicationTagLine = 'running in faster than the speed of sound!';

window.addEventListener('load', initializeApplication);

function initializeApplication() {
	
	document.title = applicationTitle;
	
	document.body.style.backgroundColor = '#BBB';
	document.body.textAlign = 'center';
	document.body.style.fontSize ='3em';
	
	var elWrapper = document.createElement('div');
	elWrapper.id = 'applicationWrapper';
	document.body.appendChild(elWrapper);
	
	var elHeader = document.createElement('header');
	elWrapper.appendChild(elHeader);
	
	var elHeaderTitle = document.createElement('h1');
	elHeaderTitle.innerHTML = applicationTitle;
	elHeader.appendChild(elHeaderTitle);
	
	var elHeaderTagLine = document.createElement('h2');
	elHeaderTagLine.textContent = applicationTagLine;
	elHeaderTagLine.style.fontSize = '.8em';
	elHeader.appendChild(elHeaderTagLine);
	
	var elMain = document.createElement('main');
	elMain.innerHTML = '<p>hello happy world ♡</p>';
	elWrapper.appendChild(elMain);
	
	var elFooter  = document.createElement('footer');
	elFooter.innerHTML = '<h4>have fun learning!! *upbeat music in the background*</h4>';
	elWrapper.appendChild(elFooter);
	
	//I wanted to put in animations I picked from animate.css; I hope that's okay? I also kind of change the words
	elHeaderTitle.className = 'animated fadeInDownBig';
	elHeaderTagLine.className = 'animated lightSpeedIn'; 
	elMain.className = 'animated zoomInDown';
	elFooter.className = 'animated rotateInUpLeft';
	
}