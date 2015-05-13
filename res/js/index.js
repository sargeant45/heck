function begin() {
    intro();
}

function intro() {
    // Do the scary shit lol
    var scarysounds = new buzz.sound("res/mp3/opener.mp3");
    var unnamedmusicstuff = new buzz.sound("res/mp3/moosic.mp3");
    unnamedmusicstuff.loop = true;
    scarysounds.bind("ended", function(){$('body').animate({ color: "white" }, 'slow');$("#other").fadeIn("slow");setTimeout(function() {unnamedmusicstuff.play(); /* Rainbows are fucking awesome */ rainbows();}, 2000);});
    $(".ascensor").slideUp(1000, function(){setTimeout(function(){scarysounds.play();}, 500)});
    $(".ascensor").fadeOut(1000);
    $("body").animate({backgroundColor: "black"}, 1000);
}

function randomQuestion() {
    var typenum = chance.integer({min: 1, max: 3});
    var type;
    var yesno = ["Can penguins fly?", "Does a pentagram have 5 sides?", "Are blueberries blue?", "If one meatbag is the weight of 2 bags of meat, then what is a lie?", "Does a square have 4 sides?", "On a scale of one to ten, what is real?", "Does 六角星 mean pentagram?", "Is Lord Chin-Chin the best Lord Chin-Chin?", "Is Mario a communist?", "On a scale of one to ten, are you a dick?", "Did aliens build the pyramids?", "On a scale of one to ten, do you hail Satan 666 Bush did 9/11?", "If you have 2 cookies, the Illuminati diamond, a knife, and a pentagram, are sloths badass?"];
    // Answers, true = yes, false = no
    var yesnocorrect = [true, false, false, true, false, true, false, true, false, true, false, true, true];
    switch(typenum)
    {
            case 1:
                type = "yesno";
                break;
            case 2:
                type = "string";
                break;
            case 3:
                type = "challenge";
                break;
   }
}

function rainbows() {
    // Rainbow stuff
    // Shadow
    $("#header").css({
        "-webkit-text-stroke" : "5px black",
        "text-shadow" : "5px 5px #ff0000;"
    });
    // Text Colors
    var colorzyayz = setInterval(function(){
        $("#heck-h").css("color", chance.color({format: 'hex'})); 
        $("#heck-e").css("color", chance.color({format: 'hex'})); 
        $("#heck-c").css("color", chance.color({format: 'hex'})); 
        $("#heck-k").css("color", chance.color({format: 'hex'}));
        $("body").css("backgroundColor", chance.color({format: 'hex'}));
    }, 250);
    setTimeout(function(){clearInterval(colorzyayz); $("#heck-h").css("color", "#B85F08"); $("#heck-e").css("color", "#B85F08"); $("#heck-c").css("color", "#B85F08"); $("#heck-k").css("color", "#B85F08"); $("body").css("backgroundColor", "white"); $("body").css("color", "black"); $("#header").css({"-webkit-text-stroke" : "0px black", "text-shadow" : "0px 0px #ff0000;"});}, 12179);
}