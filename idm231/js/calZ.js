//gets date
function calZodiac() {
    console.log("function called");

    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var bDay = new Date(document.getElementById("bdate").value);

    var month = bDay.getMonth() + 1;
    var day = bDay.getDate();

    //calculate year
    var age;

    var current = new Date();
    var currentYear = current.getFullYear();
    var currentMonth = current.getMonth() + 1;
    var currentDay = current.getDate();

    console.log("year " + currentYear);
    console.log("month " + currentMonth);
    console.log("day " + currentDay);

    if (
        month > currentMonth || (month == currentMonth && day > currentDay) //ehecks if birthday hasn't arrived yet for this year
    ) {
        age = currentYear - bDay.getFullYear() - 1;
    } else {
        age = currentYear - bDay.getFullYear();
    }

    displayZodiac(month, day, age, fName, lName);

    return false;
}

//determines and displays output
function displayZodiac(month, day, age, fName, lName)
{
	console.log('displayZodiac called');

	var output = document.getElementById("results");
	var title = document.getElementById('sign-title');
	var main = document.getElementsByTagName("main")[0];

	//calculate sign
    var sign;
    var descript;

    //checks for image tag
    if(main.getElementsByTagName('img').length == 0)
    {
        var image = document.createElement("IMG");

        main.appendChild(image);
    }

    if ((month == 12 && day >= 22) | (month == 1 && day <= 19)) {
        sign = "Bellitanus";
        descript = 'You are goal-oriented and determined, but can be a bit vain. You tend to have a positive outlook on life that some consider naive, but your ambition keeps you from being aloof. Those born under Bellitanus are said to be blessed with great beauty, and many prominent Queens of the past have been said to be personifications of The Maiden.';
        main.getElementsByTagName("img")[0].src = "const/bel.svg";
    } else if ((month == 1 && day >= 20) | (month == 2 && day <= 18)) {
        sign = "Draconis";
        descript = 'You may seem rather calculating and distant, but in truth you are looking out for those around you. Draconis are the most vigilant of all the signs, protecting the people and things they value with a fiery spirit. On the downside, Draconis can get carried away with the amassing of material wealth.';
        main.getElementsByTagName("img")[0].src = "const/dra.svg";
    } else if ((month == 2 && day >= 19) | (month == 3 && day <= 20)) {
        sign = "Eluvia";
        descript = 'Legend says this sign came to be when Eluvia, a young maiden, was sent into the sky by her father to save her from the attentions of a lustful mage, and the mage then killed him in vengeance. Eluvias are sensitive creatures always attuned to the emotions of those around her. Perhaps it is because of this that you are always surrounded by friends despite your nature. However, you tend to get lost in the turmoils of others and forget to care for yourself.';
        main.getElementsByTagName("img")[0].src = "const/elu.svg";
    } else if ((month == 3 && day >= 21) | (month == 4 && day <= 19)) {
        sign = "Equinor";
        descript = 'Pragmatic and down-to-earth, you are a hard worker who is always striving towards a goal. Equinors know exactly what they want and how they are going to do it. They are workaholics who can be in danger of neglecting their personal relationships when they become engrossed in their work.';
        main.getElementsByTagName("img")[0].src = "const/equ.svg";
    } else if ((month == 4 && day >= 20) | (month == 5 && day <= 20)) {
        sign = "Fenrir";
        descript = 'You always put your loved ones first, and are fiercely protective of those you see as "family". Fenrirs are passionate above everything else, and make for intense and dramatic lovers. However, this passion can  also lead to impulsive decision making and quick tempers.';
        main.getElementsByTagName("img")[0].src = "const/fen.svg";
    } else if ((month == 5 && day >= 21) | (month == 6 && day <= 20)) {
        sign = "Fervenial";
        descript = 'You are calm, generous, and trustworty. Like the the shade of an oak tree for friends to rest beneath, peers often find you to be a shoulder to cry on during times of crisis, and you are always there to help. Fervenials should remember that even as they care for the needs of others, they should not hesitate to speak up for their own.';
        main.getElementsByTagName("img")[0].src = "const/fer.svg";
    } else if ((month == 6 && day >= 21) | (month == 7 && day <= 22)) {
        sign = "Judex";
        descript = 'You are rational, upright, and moral to a fault. You value honesty and justness above all else, and don\'t demand any less from those you choose to befriend. The upright yet stubborn nature of a Judex will gain you as many enemies as friends. Those born under Judex should keep in mind that the world isn\'t always black and white.';
        main.getElementsByTagName("img")[0].src = "const/jud.svg";
    } else if ((month == 7 && day >= 23) | (month == 8 && day <= 22)) {
        sign = "Kios";
        descript = 'The most unpredictable of the signs, you brim with creative energy. You hate being tied down with labels and definitions and take joy out of defying expectations. A free spirit to the end, Kios can have trouble keeping commitments and maintaining lasting relationships.';
        main.getElementsByTagName("img")[0].src = "const/kio.svg";
    } else if ((month == 8 && day >= 23) | (month == 9 && day <= 22)) {
        sign = "Peraquialus";
        descript = 'Peraquialus are natural adventurers. You are born with a sense of wanderlust, and seek excitement like a hound tracking game. You are outgoing and easy to befriend, often finding yourself to be the heart of the party anywhere you go. Peraquialus are also rather foolhardy and drawn to trouble. Remember that it at the end of the day, quality counts over quantity in friendships.';
        main.getElementsByTagName("img")[0].src = "const/per.svg";
    } else if ((month == 9 && day >= 23) | (month == 10 && day <= 22)) {
        sign = "Satinalis";
        descript = 'Satinalis are often the "parent" of whatever friend group they inhabit. You have a strong nurturing instinct which leads you into mothering your friends more often than not, and that profound sense of caring makes you a cherished part of any relationship. Be aware that this parent-like tendency can also lead you to seem nosy when careless.';
        main.getElementsByTagName("img")[0].src = "const/sat.svg";
    } else if ((month == 10 && day >= 23) | (month == 11 && day <= 21)) {
        sign = "Tenebrium";
        descript = 'You are quiet and observant, easily blending into the background of things. Though many find you distant, you are always observing the world around you. When you do speak up, people are often surprised by the insight you provide.';
        main.getElementsByTagName("img")[0].src = "const/ten.svg";
    } else if ((month == 11 && day >= 22) | (month == 12 && day <= 21)) {
        sign = "Solium";
        descript = 'You are cheerful and upbeat, lighting up everyone\'s day. Soliums tend to be the \'epicenter\' of their group of friends, as many people are introduced to each other through them. However, you can tend to be somewhat self-centered.';
        main.getElementsByTagName("img")[0].src = "const/sol.svg";
    } else {
        sign = "undefined";
        descript = 'WHAT ARE YOU??';
    }

    var msg;

    //using argument length to determine if function is called from the zodiac menu or user info
    //2 args = called from menu
    //5 args = input fields

    if (arguments.length == 2) {
    	msg = descript;
    }
    else if(arguments.length == 5)
    {
    	msg = "<p>" +
        "Hello, " +
        fName +
        " " +
        lName +
        ", you're " +
        age +
        " years old and your sign is the " +
        sign +
        ".</p>" + ' ' + descript;
    }
    else
    {
    	msg = 'uhh something broke';
    }

    output.innerHTML = msg;
    title.innerHTML = sign;

    return false;
}
