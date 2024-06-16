let gamesequence=[];
let usersequence=[];

let start=false;
let lev=0;
let h2=document.querySelector("h2");
let colors=["yellow","red","orange","green"];
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        console.log("Started");

        level();
    }
});

function buttonflash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },300);
}

function level(){
    usersequence=[];
    lev++;
    h2.innerText=`Level ${lev}`;
    //choosing random color to flash for game to start
    let randomindex=Math.floor(Math.random()*3);
    let randomcolor=colors[randomindex];
    let randombutton=document.querySelector(`.${randomcolor}`);

    //maintaining the gamesequence
    gamesequence.push(randomcolor);
    console.log(gamesequence);
    buttonflash(randombutton);
}


//Checking the game and user sequence
function checksequence(index){
    if(usersequence[index]===gamesequence[index]){
        if(usersequence.length===gamesequence.length){
           setTimeout(level,1000);
        }
    }
    else{
        h2.innerText=`GAME OVER! please press any key to continue`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgb(134, 129, 129)";  
        },150);
        reset();
    }
}


//on pressing button flash
function buttonpress(){
    let btn=this;

    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },100);
    console.log("button was pressed");

//maintaining the usersequence
    let userbuttoncolor=btn.getAttribute("id");
    usersequence.push(userbuttoncolor);
    console.log(usersequence);
    checksequence(usersequence.length-1);
}


let buttons=document.querySelectorAll(".btn");
for(btn of  buttons){
    btn.addEventListener("click",buttonpress);
}

function reset(){
    lev=0;
    gamesequence=[];
    usersequence=[];
    start=false;
}