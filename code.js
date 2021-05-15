function game(a,b){
   let choices = ['Rock', 'Paper', 'Scissor']; 
   let score = 0;

   function playGame(x, y){
    y = y.toLowerCase()
    x = x.toLowerCase()

    if (x === y){
        return 0
    } 
    if (x === 'rock'){
       if (y === 'paper'){
          return 1
       }else{
           return 0
       }
    }
    if (x === 'paper'){
       if (y === 'scissor'){
           return 1
       }else{
           return 0
       }
    }
    if (x === 'scissor'){
       if (y === 'rock'){
           return 1
       }else{
           return 0
        }
    }
     
   }

   for (let i=0; i<5; i++){
    let playerSelection = prompt('What is your choice?')   
    let computerChoice = choices[Math.floor(Math.random()*3)] // Computer Randomly Picks Choice    
    if (playGame(computerChoice, playerSelection) == 1){
        score += 1
    }
    console.log(i);
    console.log('You picked ' + playerSelection + '. The computer picked ' + computerChoice)

   }
   
   return score     
}
console.log('Your score is ' + game())