function begin() {
    var scarysounds = new buzz.sound("res/mp3/opener.mp3");
    scarysounds.bind("ended", function(){$('body').animate({ color: "white" }, 'slow');$("#other").fadeIn("slow");});
    $(".ascensor").slideUp(1000, function(){setTimeout(function(){scarysounds.play();}, 500)});
    $(".ascensor").fadeOut(1000);
    $("body").animate({backgroundColor: "black"}, 1000);
}

function flicker(count, callback, current) {
    // Recycled code, fuck yeah!
    // http://jsfiddle.net/arunpjohny/upyq9/
    current = current || 0;
    
    $("#title")[current % 2 == 0 ? 'hide' : 'show']();
    
    setTimeout(function(){
        if (count * 2 <= current) {
            callback();
            return;
        }
        flicker(count, callback, current + 1)
    }, 300);
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
