let times = 0; // scrambled effect shown in one transition
let limit = 10; //number of scramble effect between two transitions
let textCounter =0; //index variable for messages array

// obj holds id reference to which wil have the scramble effect
let obj  = document.getElementById('random');

//  array of your input message
let messages = [
    'EAT', 
    'SLEEP', 
    'CODE',
    'REPEAT'
    ];

// array of random characters

let random = ['@', '#', '%', '^', '&', '/' , '|', '*', '!', '?'];


let scramble = function() {

    times = times +1;
   
    if(times == limit){
        times=0;
        setText();
       
    }else {
        obj.innerHTML = randomString();
        setTimeout(scramble,100);
       
       
    }
}

let setText = function() {
    console.log('a');
    obj.innerHTML = messages[textCounter];
    textCounter = (textCounter +1 ) % messages.length;
   
    setTimeout(scramble, 800); 
}


let randomString = function () {
    
    let str = " ";
    let len = messages[textCounter].length;

    len = len < 5 ? 5 : 10;


    for(i=0; i<len; i++){

        let index = (Math.floor((Math.random() * 100))) % 10;
        str = str + random[index];
        
       
        
    }
   return str;
    
}

scramble();