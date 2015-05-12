function begin() {
    setTimeout(function () {
    flicker(3, function () {
            $("#other").fadeIn("slow");
        })
    }, 1000)
}

function flicker(count, callback, current) {
    // Recycled code, fuck yeah!
    // http://jsfiddle.net/arunpjohny/upyq9/
    current = current || 0;
    
    $(".info")[current % 2 == 0 ? 'hide' : 'show']();
    
    setTimeout(function(){
        if (count * 2 <= current) {
            callback();
            return;
        }
        flicker(count, callback, current + 1)
    }, 500);
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
