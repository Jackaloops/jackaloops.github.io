var sub = document.getElementById('form');
	sub.addEventListener('submit', function(){
		console.log('Submit Triggered');
		playSubmit();
	});

var zodiacs = document.getElementsByClassName('zodiac-link');
for(var i = 0; i < zodiacs.length; i++)
{
	console.log('compiling audio links');

	//permanent id
	zodiacs[i].setAttribute('id', i);

		zodiacs[i].addEventListener('mouseover', function()
			{
				console.log('Hover triggered');
				playZodiacHover(this);
			});
		zodiacs[i].addEventListener('click', function() {
			console.log('Click triggered');
			playZodiacClick(this);
		});
}



function playSubmit()
{
	console.log();

	var audio = new Audio('audio/submit_ping.mp3');
	audio.play();
}

function playZodiacHover(z)
{
	console.log(z);

	var n = parseInt(z.getAttribute('id'));

	var audio = new Audio('audio/z_hover_' + n + '.mp3');
	audio.play();
}

function playZodiacClick(z)
{
	console.log(z);

	var n = parseInt(z.getAttribute('id'));

	var audio = new Audio('audio/z_ping_' + (n % 3) +'.mp3');
	audio.play();
}