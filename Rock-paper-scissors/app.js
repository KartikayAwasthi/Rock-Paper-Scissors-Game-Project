let userScore=0;
let botScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const botScorePara=document.querySelector("#bot-score");

const genBotchoice=()=>{
    const options=["rock","paper","scissor"];
   const randidx= Math.floor(Math.random()*3);
   return options[randidx];

}

const drawGame=()=>{
    console.log("GAME DRAW");
    msg.innerText ="आजा एक बार फिर हो जाये";
    msg.style.backgroundColor="#050737";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("YOU WON");
        msg.innerText ="शब्बाश बेटे!!! तुम जीत गए";
        msg.style.backgroundColor="green";
    }
    else{
        botScore++;
        botScorePara.innerText=botScore;
        console.log("YOU LOSE");
        msg.innerText ="निकल लौड़े, तुम हार गए";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const botChoice=genBotchoice();
    console.log("bot choice=",botChoice);

    if(userChoice===botChoice)
    {
        //draw game
        drawGame();

      }  else
        {
            let userWin=true;
            if(userChoice==="rock")
            {   //sccissor or paper 
                userWin=botChoice==="paper"? false : true;

            }else if(userChoice==="paper")
            {
                userWin=botChoice==="scissor"? false:true; 
            }
            else{
                userWin=botChoice==="rock"?false:true;
            }
            showWinner(userWin);
        }
    }


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

