


let globalties=0
let globalwins=0
let globallosses=0
let userChoice

const button=document.querySelector("#rock");
button.addEventListener('click', function(){
    userChoice='rock';
    playgame();
})

const button1=document.querySelector("#paper");
button1.addEventListener('click', function(){
    userChoice='paper';
    playgame();
})

const button123=document.querySelector("#scissors");
button123.addEventListener('click', function(){
    userChoice='scissors';
    playgame();
})


    function playgame(){
        let randomNumber=Math.floor(Math.random()*3);
        let computerChoice
        if(randomNumber===0){
            computerChoice= "rock";
        }
        if(randomNumber===1){
            computerChoice= "paper";
        }
        if(randomNumber===2){
            computerChoice= "scissors";
        }
        if(userChoice===computerChoice){
            alert("its a tie")
            globalties++
        }
        else if(userChoice==="paper" && computerChoice==="rock"){
            alert("you won!")
            globalwins++
        }
        else if(userChoice==="scissors" && computerChoice==="paper"){
            alert("you won!")
            globalwins++
        }
        else if(userChoice==="rock" && computerChoice==="scissors"){
            alert("you won!")
            globalwins++
        }
        else{
            alert("you lost")
            globallosses++
        }
        var wins = document.querySelector('#win').textcontent = globalwins;
        var ties = document.querySelector('#ties').textcontent = globalties;
        var losses = document.querySelector('#losses').textcontent = globallosses;
    }
