function begin() {
    $(".info").hide();
    window.setTimeout(function(){ $("#other").show(); }, 1000)
    
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