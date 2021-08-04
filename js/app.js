'use strict';
let name = prompt("what's your name?").toLowerCase();
 
alert("welcome to my website" +" "+ name)
let score = 0;
let education = prompt("do you think that i like information technology field?  yes or no ").toLowerCase();

    switch (education ) {
        case 'yes':
            case 'y':
            //console.log('thats right');
            
            alert("thats right");
            score++;
        
            break;
            case 'no':
            case 'n':  
            alert("wrong");
            break;
            default:
            alert("please answer yes or no ");
    }
    

    

let travel = prompt("am i a good swimmer?  yes or no").toLowerCase();
switch (travel) {
    case 'yes':
    case 'y':
    //console.log('thats right');
    alert("thats right");
    score++;
    break;
    case 'no':
    case 'n':  
    alert("wrong");
    break;
    default:
    alert("please answer yes or no ");
}

let work = prompt("do you that i like work under pressure?  yes or no ").toLowerCase();
switch (work) {
        case 'yes':
        case 'y':
        //console.log('thats right');
        alert("thats right");
        score++;
        break;
        case 'no':
        case 'n':  
        alert("wrong");
        break;
        default:
        alert("please answer yes or no ");
     
    }
 
let language = prompt ("do you think that i like korean language?  yes or no").toLowerCase();
switch (language) {
    case 'yes':
        case 'y':
        //console.log('thats right');
        alert("thats right");
        score++;
        break;
        case 'no':
        case 'n':  
        alert("wrong");
        break;
        default:
        alert("please answer yes or no ");
     
    }

let pets = prompt("do you think that i have allergic from cats?  yes or no").toLowerCase();
switch (pets) {
    case 'yes':
        case 'y':
        //console.log('thats right');
        alert("thats right");
        score++;
        break;
        case 'no':
        case 'n':  
        alert("wrong");
        break;
        default:
        alert("please answer yes or no ");

       
}
let number 
  for(let i = 0; i < 4 ; i++){
    Number(prompt("guess how many pets do i have? "))
    if(number == 5){
        alert("yes right " + number)
        score++;
        break; 
    }
  
 else if(number > 5)
    alert("too high " + number)
  
 else if(number < 5)
      alert("too low " + number)
   }

    
    if(number != 5)
    alert("the answer is 5");
      

      let movie
      let bestMovies = ['Parasite' ,'Train to Busan' ,'Burning' ,'The Host' ,'A Taxi Driver','Train to Busan','The Call'];
        
         
        for (let x = 0; x < 6; x++) {
            movie = (prompt("the best movie for me 'Parasite' ,'Train to Busan' , 'avatar' , 'Poetry' ,'Okja' ,'Mother' "))
           // console.log(movie + " user answer");
        

      let j
      for ( j = 0; j < bestMovies.length; j++) { 
        // console.log(bestMovies.[j] + "correct answer");

        if (movie ==  bestMovies[j]) {
        alert("yes correct");
        console.log("the correct answer " + movie);
        score++;
        break;
        
        }
         
        }
    
        if( movie == bestMovies[j]){
         break;  
        }

        else{     
        alert("thats not right");
         
        }
    }
        
alert("the correct answers are: 'Parasite' ,'Train to Busan' ,'Burning' ,'The Host' ,'A Taxi Driver','Train to Busan','The Call' ")
alert("the score is : " + score + "out of 7");
alert("thanks for using my website" +" "+ name)
 
 