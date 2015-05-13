function intro() {
    // Do the scary shit lol
    var scarysounds = new buzz.sound("res/mp3/opener.mp3");
    var unnamedmusicstuff = new buzz.sound("res/mp3/moosic.mp3");
    music(true, unnamedmusicstuff);
    $(".ascensor").slideUp(1000, function(){setTimeout(function(){scarysounds.play();}, 500);});
    $(".ascensor").fadeOut(1000);
    $("body").animate({backgroundColor: "black"}, 1000);
    // Rainbows!!
    scarysounds.bind("ended", function(){$('body').animate({ color: "white" }, 'slow');$("#other").fadeIn("slow");setTimeout(function() {music(false, unnamedmusicstuff); /* Rainbows are fucking awesome */ rainbows();}, 2000); setTimeout(function(){randomQuestion();}, 15179);});
}
function rainbows() {
    // Rainbow stuff
    // Shadow
    $("body").css("font-family", "Comic Sans MS, 'Comic Sans', 'Comic Sans MS', Comic Sans, handwriting");
    $("#header").css({
        "-webkit-text-stroke" : "5px black",
        "text-shadow" : "5px 5px #ff0000",
        "font-family" : "Comic Sans MS, 'Comic Sans', 'Comic Sans MS', Comic Sans, handwriting"
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

function music(load, musics) {
  if(load === true)
  {
    musics.load();
  }
  else
  {
    musics.play();
    setInterval(function(){musics.play();}, 205000);
  }
}

function randomQuestion() {
    var typenum = chance.integer({min: 1, max: 2});
    
    // Subtext, or stuff that comes up before the question, is generated randomly.
    // Mad Libs style!
    
    var subtext = "";
    var exclamations = ["Oh no!", "Leaping lizards!", "Holy balls, Batman!", "Holy Satan's buttcrack!", "Oh my demons!", "Holy astronomy, Batman!", "Holy schizophrenia patient!", "Oh noes!", "Well, slap my tits and call me Shirley!", "Oh my god! It's so intense!", "Incarcerated dumptrucks, Batman!", "Great balls of fire!", "This situation is so intense, I'd put it on Shark Tank!", "No way!", "Well piss on my dog and call me Batman, Batman!", "Holy incarceration, Batman!", "Oh my god, Robin!", "I can't even!", "I have lost the ability to even!", "Doz nuts tho, Batman!", "We're in a pickle!", "This situation looks worse than yo momma!"];
    var person = ["Satan's skeletal army", "Weeaboo Jones", "The developer", "Your mom", "Satan", "Satan's gatekeeper", "A demon", "Your bratty little sister", "Lord Chin-Chin", "The one black kid from Little Einsteins", "Spoderman", "A wither skeleton", "Walter White", "Linus Torvalds", "Brandi Maxxx", "A confederate supporter", "An honorable businessman", "The kid from Limbo", "Foster the People", "One Direction", "Justin Bieber", "Dolan", "Satan's army of gigantic 8-legged pigs", "Filthy Frank", "Smosh", "Shane Dawson", "Robin", "Mickey Mouse", "A dead whale", "A dumbass hipster", "A pseudo-intellectual white kid", "Iggy Azaelea", "Kanye West"];
    var action = ["has you!", "wants to pop a niner in your face with a deuce deuce!", "will drag you into the depths of Heck, once and for all!", "is following you, in an attempt to kill you with a very certain set of skills.", "will hack into your mental system and use your body to take over Heck and then the world!", "is on the hunt for a you, with three rules: \"Get paid, get laid, and execute the target via Gatorade\".", "will eat you!"];
    
    // All questions correlate with an answer because they are at the same index in their arrays, so the randomly picked number will access both of them
    var question = "";
    
      // Yes or no questions
      var yesno = ["Can penguins fly?", "Does a pentagram have 5 sides?", "Are blueberries blue?", "If one meatbag is the weight of 2 bags of meat, then what is a lie?", "Does a square have 4 sides?", "On a scale of one to ten, what is real?", "Does 六角星 mean pentagram?", "Is Lord Chin-Chin the best Lord Chin-Chin?", "Is Mario a communist?", "On a scale of one to ten, are you a dick?", "Did aliens build the pyramids?", "On a scale of one to ten, do you hail Satan 666 Bush did 9/11?", "If you have 2 cookies, the Illuminati diamond, a knife, and a pentagram, are sloths badass?", "1 hole in yes?"];
      // Answers, true = yes, false = no
      var yesnocorrect = [true, false, false, true, false, true, false, true, false, true, false, true, true, true];
      
      // Word answer questions (multiple choice)
      var wordanswer = ["What is blue?", "How many faces on a pentagram?", "How many episodes of Star Wars were there?", "How many Indiana Jones movies were there?", "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"];
      // Correct answer
      var wordanswercorrect = ["your face", "1", "3", "3", "42"];
      // Incorrect answer
      var wordanswerincorrect = ["blueberries", "5", "6", "4", "It's a groundhog."];
    
    switch(typenum)
    {
            case 1:
                // Yes or no.
                // Format subtext.
                subtext = exclamations[chance.integer({min: 0, max: exclamations.length - 1})] + " " + person[chance.integer({min: 0, max: person.length - 1})] + " " + action[chance.integer({min: 0, max: action.length - 1})] + " Answer a question if you want any chance of surviving!";
                alert(subtext);
                var questionIndex = chance.integer({min: 0, max: yesno.length - 1});
                question = "Your question is:\n" + yesno[questionIndex] + "\nPlease type 'y' if yes, and type 'n' if no.";
                var useranswer = prompt(question, "y or n").toLowerCase();
                if(useranswer === "" || useranswer === "y or n")
                {
                    incorrect();
                }
                else
                {
                    var useranswerbool;
                    switch(useranswer)
                    {
                      case "y":
                        useranswerbool = true;
                        break;
                      case "n":
                        useranswerbool = false;
                        break;
                      default:
                        incorrect();
                        break;
                    }
                    if(useranswerbool === yesnocorrect[questionIndex])
                    {
                      correct();
                    }
                    else
                    {
                      incorrect();
                    }
                }
                break;
            case 2:
                // Word answer.
                // Format subtext.
                subtext = exclamations[chance.integer({min: 0, max: exclamations.length})] + " " + person[chance.integer({min: 0, max: person.length})] + " " + action[chance.integer({min: 0, max: exclamations.length})] + " Answer a question if you want any chance of surviving!";
                alert(subtext);
                var questionIndex = chance.integer({min: 0, max: wordanswer.length - 1});
                var oneortwo = chance.integer({min: 1, max: 2});
                switch(oneortwo)
                {
                    case 1:
                        question = "Your question is:\n" + wordanswer[questionIndex] + "\nPlease type '1' if the answer is '" + wordanswerincorrect[questionIndex] + "'. Please type '2' if the answer is '" + wordanswercorrect[questionIndex] + "'.";
                        break;
                    case 2:
                        question = "Your question is:\n" + wordanswer[questionIndex] + "\nPlease type '1' if the answer is '" + wordanswercorrect[questionIndex] + "'. Please type '2' if the answer is '" + wordanswerincorrect[questionIndex] + "'.";
                }
                var useranswer = prompt(question, "answer").toLowerCase();
                if(useranswer === "" || useranswer === "answer")
                {
                    incorrect();
                }
                else
                {
                    switch(useranswer)
                    {
                      case wordanswercorrect[questionIndex]:
                        correct();
                        break;
                      case wordanswerincorrect[questionIndex]:
                        incorrect();
                        break;
                      default:
                        incorrect();
                        break;
                    }
                }
                break;
   }
}

function correct() {
  var sound;
  switch(chance.integer({min: 1, max: 3}))
  {
      case 1:
        sound = new buzz.sound("http://picosong.com/cdn/0d1d307cd0fd832c7c8f58b660abe102.mp3");
        break;
      case 2:
        sound = new buzz.sound("http://picosong.com/cdn/e84e725ca9a8eeb332351bd6d5177b3b.mp3");
        break;
      case 3:
        sound = new buzz.sound("http://picosong.com/cdn/de00408ed078a588da7a5946a21940f3.mp3");
        break;
  }
  music(false, sound);
  var num = parseInt(document.getElementById("turncount").innerHTML, 10);
  var newnum = num++;
  document.getElementById("turncount").innerHTML = newnum;
  
  setTimeout(function(){randomQuestion();}, 2000);
}

function incorrect() {
  // code some game over stuff here, but for later.
  // for now, just close();
  close();
}
