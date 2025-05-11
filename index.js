const min=1;
const max=100;
const answer=Math.floor(Math.random() *(max-min+1))+min;
let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt("guesss between ",min,max);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("please enter valid num");
    }
    else if(guess<min || guess>max){
        window.alert("please enter valid num");

    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("to low!try again")
        }
        else if(guess>answer){
            window.alert("too high!!try again");
        }
        else{
            window.alert("correct answer",answer,"it took",attempts,"attempts");
            running=false;
        }
    }

    
   

}