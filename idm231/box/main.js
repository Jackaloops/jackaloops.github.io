function changecolors() {
	var boxes = document.getElementsByClassName('box');

	for(var i = 0; i < boxes.length; i++)
	{
		boxes[i].className += ' red';
	}

	return false;
}

function changeColorsOne(idname) {

	var box = document.getElementById(idname);

	box.className += ' red';

	return false;

}

function changeh2()
{
	var h2 = document.getElementsByTagName('h2');

	for(var i = 0; i < h2.length; i++)
	{
		console.log(h2[i]);
		h2[i].innerHTML = 'bye';
	}

	return false;
}