var showButton = document.getElementById('showcase_button');
console.log(showButton);

showButton.addEventListener('mouseenter', changeShowPic);
showButton.addEventListener('mouseleave', changeShowPicBack)

function changeShowPic() {
	// console.log('function called');
	showButton.getElementsByTagName('img')[0].src = 'img/showcase-hover-icon.svg';
}

function changeShowPicBack() {
	// console.log('return function called');
	showButton.getElementsByTagName('img')[0].src = 'img/showcase-icon.svg';
}