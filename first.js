let choices= document.querySelectorAll(".choice");
let play = document.querySelector("#play");
let choicesArr= ["rock" , "paper" ,"scissor"];
let stat= document.querySelector("#stat")
let user = document.querySelector("#user");
let comp= document.querySelector("#comp");
let random;
let u=0;
let c=0;
function randomValue(){
 random = Math.floor(Math.random()*3);
}
let compChoice;
let A;

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>
        {  A =choice.getAttribute("id");
           choice.classList.add("blink")
            randomValue();
            compChoice = choicesArr[random];
            play.disabled = false;
        });
});

play.addEventListener("click" , ()=>{
    if(A===compChoice){
        console.log("drow");
        stat.textContent="drow";
    }else{
        if(A==="rock"){
            compChoice==="paper" ? compWins(): userWins();
        }else if(A==="paper"){
            compChoice==="scissor"? compWins():userWins();
        }else if(A==="scissor"){
            compChoice==="rock" ? compWins():userWins() ;
        }
    }
    play.disabled=true;
    choices.forEach((choice) =>{
        choice.classList.remove("blink")
    })
});

function compWins(){
    stat.textContent=`comp wins ${compChoice} beats ${A}`;
    ++c;
    comp.textContent = c;
    console.log("comp wins")
};
function userWins(){
     stat.innerText=`user wins ${A} beats ${compChoice}`;
    ++u;
     user.innerText= u;
     console.log('user wins')
};
   
