function begin() {
    document.getElementById("doorslam").load();
    $(".info").hide();
    $("#title").hide();
    document.getElementById("doorslam").play();
    $("body").animate({backgroundColor: "black"}, "slow");
    setTimeout(function () {
        flicker(2, function () {
                $("#other").fadeIn("slow");
                setTimeout(function () {$('body').animate({ backgroundColor: "white" }, 'slow');}, 250);
        })
    }, 3000);
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
    }, 100);
}

function randomQuestion() {
    var typenum = chance.integer({min: 1, max: 3});
    var type;
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
   switch(type)
   {
           case "yesno":
                
   }
}
