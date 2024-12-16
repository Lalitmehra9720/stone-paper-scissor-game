let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let scorecard = document.querySelector(".scorecard");
let score = document.querySelector('#score');
let reset = document.getElementById('resetButton');
let showComputer = document.querySelector('.computerChoice');
let computerstone = document.querySelector('.computerstone');
let computerpaper=document.querySelector('.computerpaper');
let computerscissor = document.querySelector('.computerscissor');
let num;
let computerChoice;
let userScore=0;
let computerScore=0;
function randomNumber(){
      num=Math.random()*3;
      if(num > 0 && num <1){
            return 1;
      }else if(num > 1 && num < 2){
            return 2;
      }else{
            return 3;
      }
}
function showComputerChoice(choice){
      if(choice == 1 ){
      computerstone.style.display='inherit';
      computerpaper.style.display='none';
      computerscissor.style.display='none';
      }else if(choice ==2){
      computerpaper.style.display='inherit';
      computerstone.style.display='none';
      computerscissor.style.display='none';

      }else{
      computerscissor.style.display='inherit';
      computerstone.style.display='none';
      computerpaper.style.display='none';
      }
}
stone.addEventListener('click',()=>{
      computerChoice = randomNumber();
      showComputerChoice(computerChoice);
            if(computerChoice==1){
            score.innerText= `it's a tie and user score: ${userScore} and computer score: ${computerScore}`;
      }else if (computerChoice ==2){
            score.innerText= `computer won, user score = ${userScore} and  computer score = ${++computerScore}`;
      }else{
            score.innerText = `user won, user score = ${++userScore} and computer score = ${computerScore}`;
      }
      console.log(computerChoice);
});

paper.addEventListener('click',()=>{
      computerChoice = randomNumber();
      showComputerChoice(computerChoice);
      if(computerChoice==1){
            score.innerText= `user won, user score: ${++userScore} and computer score: ${computerScore}`;
      }else if (computerChoice ==2){
            
            score.innerText= `it's a tie, user score: ${userScore} and computer score: ${computerScore}`;
      }else{
            score.innerText= `computer won user score = ${userScore} and computer score = ${++computerScore}`;
      }
      console.log(computerChoice);
});

scissor.addEventListener('click',()=>{
      computerChoice = randomNumber();
      showComputerChoice(computerChoice);
      if(computerChoice==1){
            score.innerText=`computer won, user score = ${userScore} and  computer score = ${++computerScore}` ;
      }else if (computerChoice ==2){
            score.innerText= 
            `user won, user score = ${++userScore} and computer score = ${computerScore}`;
      }else{
            score.innerText = `it's a tie and user score: ${userScore} and computer score: ${computerScore}`;
      }
      console.log(computerChoice);
});
reset.addEventListener('click',()=>{
      computerScore=0;
      userScore=0;
      score.innerText=`Now your new game is started.`;
      computerpaper.style.display='none';
      computerstone.style.display='none';
      computerscissor.style.display='none';
});