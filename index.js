//Fuction made to make any alpha string uppercase. passed test 1
function shout(string) {
    return string.toUpperCase();
}
//function made to make any alhpa string lowercase.  Passes test 2.
function whisper(string) {
    return string.toLowerCase();
}
//function to make any alpha string uppercase and output with the console.log function. passes test 3
function logShout(string) {
    console.log(string.toUpperCase());
}
//function to make any alpha string lowercase and output with the console.log function. passes test 4
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    if (string==="I love you, Grandma."){
        return "I love you, too."
    }

    else if (string!==string.toUpperCase()){
         return "I can't hear you!"
    }
    
    else if (string===string.toUpperCase()) {
        return "YES INDEED!"
    }
}