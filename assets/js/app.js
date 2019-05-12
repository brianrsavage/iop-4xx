// JavaScript Document
'use strict';

var applicationTagLine = 'running in faster than the speed of sound!';

var appdata = {
	title: 'inside out - js',
	tagLine: 'running in faster than the speed of sound'
};

window.addEventListener('load', initializeApplication);

function initializeApplication() {
	
	document.title = appData.title;
	
	document.body.style.backgroundColor = '#BBB';
	document.body.textAlign = 'center';
	document.body.style.fontSize ='3em';
	
	var elWrapper = document.createElement('div');
	elWrapper.id = 'applicationWrapper';
	document.body.appendChild(elWrapper);
	
	var elHeader = document.createElement('header');
	elWrapper.appendChild(elHeader);
	
	var elHeaderTitle = document.createElement('h1');
	elHeaderTitle.innerHTML = appData.title;
	elHeader.appendChild(elHeaderTitle);
	elHeaderTitle.className = 'animated fadeInDownBig';
	
	var elHeaderTagLine = document.createElement('h2');
	elHeaderTagLine.textContent = appdata.tagLine;
	elHeaderTagLine.style.fontSize = '.8em';
	elHeader.appendChild(elHeaderTagLine);
	elHeaderTagLine.className = 'animated lightSpeedIn'; 
	
	var elMain = document.createElement('main');
	elMain.innerHTML = '<p>hello happy world ♡</p>';
	elWrapper.appendChild(elMain);
	elMain.className = 'animated zoomInDown';
	
	var elFooter  = document.createElement('footer');
	elFooter.innerHTML = '<h4>have fun learning!! *upbeat music in the background*</h4>';
	elWrapper.appendChild(elFooter);
	elFooter.className = 'animated rotateInUpLeft';
	
	//I wanted to put in animations I picked from animate.css; I hope that's okay? I also kind of change the words

	
	
	
	
}