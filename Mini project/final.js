let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choise");
const msg =document.querySelector("#msg")

const userScorePara =document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")


const genCompChoice=()=>{                            //step3
    const options =["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawGame=()=>{
    msg.innerText="Draw Game!";
    msg.style.backgroundColor="#081b31"

}


const showWinner= (userwin,userChoice,CompChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText =userScore
        msg.innerText=`You Win! Your${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorepara.innerText =compScore
        msg.innerText=`You lost. ${userChoice} beats Your${CompChoice}`
        msg.style.backgroundColor="red"

    }
}


const playGame =(userChoice)=>{                                                           
    const CompChoice=genCompChoice();                        

    if (userChoice===CompChoice) {
        // Draw the game
        drawGame()
    }else{
        let userwin=true;
        if(userChoice==="rock"){//
            //scissor, paper    ===>comp.choise this option avilable
            userwin= CompChoice==="paper"?false:true

        }else if (userChoice==="paper") {//
            //rock,scissor
            userwin = CompChoice==="scissors" ? false : true
        } else {
            // rock, paper
            userwin=CompChoice==="rock"? false:true
        }
        showWinner(userwin,userChoice,CompChoice)
    }
}



choices.forEach((choise) => {                                                   //user step1
    // console.log(choise);                                               //all choise
    choise.addEventListener("click",()=>{   
        const userChoice = choise.getAttribute("id")
        playGame(userChoice);                                                            //step2

    })

})
