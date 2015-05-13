/*
Organized Scripts to Be Added to Index.js
*/

// Rainbow stuff
// Shadow
$("#header").css({
    "-webkit-text-stroke" : "1px black",
    "text-shadow" : "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
});
// Text Colors
var colorzyayz = setInterval(function(){
    $("#heck-h").css("color", chance.color({format: 'hex'})); 
    $("#heck-e").css("color", chance.color({format: 'hex'})); 
    $("#heck-c").css("color", chance.color({format: 'hex'})); 
    $("#heck-k").css("color", chance.color({format: 'hex'}));
    $("body").css("backgroundColor", chance.color({format: 'hex'}));
}, 250);
setTimeout(function(){clearInterval(colorzyayz);}, 10000);