// JS scripts for hover effects on my kickass lantern
// Yeah, kinda inefficient because its loading mobile AND desktop eventListeners, but i don't know enough jQuery yet :I
// Will fix eventually

//finds variables
var showButton = document.getElementById('showcase_button');
console.log(showButton);
var showButtonMobile = document.getElementById('toggle_button');
console.log(showButtonMobile);

//stores file path of showcase-icon.svg
var mobileVer = showButtonMobile.getElementsByTagName('img')[0].src;

//adds listeners
showButton.addEventListener('mouseenter', changeShowPic);
showButton.addEventListener('mouseleave', changeShowPicBack);

showButtonMobile.addEventListener('touchstart', changeMobile);


function changeShowPic() {
	// console.log('function called');
	showButton.getElementsByTagName('img')[0].src = 'img/showcase-hover-icon.svg';
}

function changeShowPicBack() {
	// console.log('return function called');
	showButton.getElementsByTagName('img')[0].src = 'img/showcase-icon.svg';
}

function changeMobile() {

	// console.log('changeMobile triggered: ', showButtonMobile.getElementsByTagName('img')[0].src);

	if(showButtonMobile.getElementsByTagName('img')[0].src === mobileVer) {
		showButtonMobile.getElementsByTagName('img')[0].src = 'img/showcase-hover-icon.svg';
	}
	else {
		showButtonMobile.getElementsByTagName('img')[0].src = 'img/showcase-icon.svg';
	}
}