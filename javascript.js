const rock = "rock";
const paper = "paper";
const scissor = "scissor";
let score = 0;

document.getElementById("rock1").addEventListener("click", function() { check(rock, paper, scissor);});
document.getElementById("paper1").addEventListener("click", function() { check(paper , rock , scissor);});
document.getElementById("scissor1").addEventListener("click", function() { check(scissor , paper, rock);});

document.getElementById("pick").addEventListener("click", function() { pick(rock , paper, scissor);});

document.getElementById("again").addEventListener("click", function() { playagain(rock , paper, scissor);});

function check(a , b, c){
    document.getElementById(a).checked = true;
    document.getElementById(b).checked = false;
    document.getElementById(c).checked = false;
    document.getElementById(a + "1").style.backgroundColor = "#bee3db";
    document.getElementById(b + "1").style.backgroundColor = "";
    document.getElementById(c + "1").style.backgroundColor = "";

}

function pick(a , b , c){

    if (document.getElementById(a).checked === false && 
        document.getElementById(b).checked === false && 
        document.getElementById(c).checked === false){

        alert("Please Pick");
    }else{

        let i = Math.floor(Math.random() * 6) + 1;
        let no = 0;

        if (document.getElementById(a).checked){
            no = 1;
            document.getElementById("playerpic").src ="pic/rock.png";
        }else if  (document.getElementById(b).checked){
            no = 2;
            document.getElementById("playerpic").src ="pic/paper.png";
        }else if  (document.getElementById(c).checked){
            no = 3;
            document.getElementById("playerpic").src ="pic/scissor.png";
        }
    
        /* i = 1 rock       no = 1 rock
        i = 2 paper      no = 2 paper
        i = 3 scissor    no = 3 scissor

        i = computer     no = player
        */

        if (i == 1 || i == 4){
            document.getElementById("compic").src ="pic/rock.png";
        } else if (i == 2 || i == 5 ){
            document.getElementById("compic").src ="pic/paper.png";
        }else if (i == 3 || i == 6){
            document.getElementById("compic").src ="pic/scissor.png";
        } 

        //sa may no = 1
        if (no == 1 && (i == 1 || i == 4)){
            document.getElementById("winlose").innerHTML =  "Draw";
        }else if (no == 1 && (i == 2 || i == 5)){
            document.getElementById("winlose").innerHTML ="You Lose";
        }else if (no == 1 && (i == 3 || i == 6)){
            document.getElementById("winlose").innerHTML ="You Win";
            score++;

        //sa may no = 2
        }else if (no == 2 && (i == 1 || i == 4)){  
            document.getElementById("winlose").innerHTML ="You Win";
            score++;

        }else if (no == 2 && (i == 2 || i == 5)){
            document.getElementById("winlose").innerHTML ="Draw";
        }else if (no == 2 && (i == 3 || i == 6)){
            document.getElementById("winlose").innerHTML ="You Lose";
        
        //sa may no = 3
        }else if (no == 3 && (i == 1 || i == 4)){    
            document.getElementById("winlose").innerHTML ="You Lose";
        }else if (no == 3 && (i == 2 || i == 5)){
            document.getElementById("winlose").innerHTML ="You Win";
            score++;

        }else if (no == 3 && (i == 3 || i == 6)){
            document.getElementById("winlose").innerHTML ="Draw";
        }

        document.getElementById("score").innerHTML = score;
        document.getElementById("row").style.display = "none";
        document.getElementById("row2").style.display = "flex";
        document.getElementById("pick").style.display = "none";
        document.getElementById("again").style.display = "block";
    }
}

function playagain(a ,b ,c){
    document.getElementById("row").style.display = "flex";
    document.getElementById("row2").style.display = "none";
    document.getElementById("pick").style.display = "block";
    document.getElementById("again").style.display = "none";

    document.getElementById(a).checked = false;
    document.getElementById(b).checked = false;
    document.getElementById(c).checked = false;
    document.getElementById(a + "1").style.backgroundColor = "";
    document.getElementById(b + "1").style.backgroundColor = "";
    document.getElementById(c + "1").style.backgroundColor = "";
}
