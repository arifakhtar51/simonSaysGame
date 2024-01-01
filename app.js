
let curr=["red","yellow","green","purple"];//1 2 3 4
let track=[];
let track2=[];
let h2=document.querySelector("h2");

let level=0;
let started=true;
document.addEventListener("keydown",()=>{
        if(started==true){
            started=false;
            console.log("game started",started);
            h2.innerText=`level ${level}`;
            game();
        }
        
    })


let f=document.querySelector(".first");
let s=document.querySelector(".second");
let t=document.querySelector(".third");
let fourth=document.querySelector(".fourth");
let btns=document.querySelectorAll(".btn");
let body=document.querySelector("body");
console.log("Buttons->",btns);


let counterNew=0;
function Btn(){      
    counterNew++;
    let clss=this.classList[1];
    track2.push(clss);
    fuse(clss);
    check(counterNew);
    console.log(clss);

}

function temp2(){


        for(b of btns){
            b.addEventListener("click",Btn);
            console.log(b);
        }
}



function game(){
    h2.innerText=`level ${level}`;
    let rndmNum=Math.floor(Math.random()*4);
    let getEle=curr[rndmNum];
    let temp=document.querySelector(`.${getEle}`);
    track.push(getEle);
    fuse(getEle);
    temp2();

}
function gameLevel(){
    let rndmNum=Math.floor(Math.random()*4);
    let getEle=curr[rndmNum];
    let temp=document.querySelector(`.${getEle}`);
    track.push(getEle);
    fuse(getEle);
    h2.innerText=`level ${level}`;
}

function check(){
    let ans=track2[counterNew-1]==track[counterNew-1]?1:0;
    console.log(track2);
    console.log(track);
    console.log(counterNew);
    if(ans==0){
        console.log("wrong input");
        h2.innerText=`Game Over Your heighest score is ${level}`;
        setTimeout(()=>{
            body.style.background="red";
        },200);
        setTimeout(()=>{
            body.style.background="white";
        },1000)
        
        

        return ;
    }
    else
    console.log("checked Completed");
if(counterNew>level){
    level++;
    track2=[];
    counterNew=0;

    setTimeout(()=>{
        gameLevel();
    },700)
    
   

}
   
    
    return 1;
}
function fuse(getEle){
    let temp=document.querySelector(`.${getEle}`);
    setTimeout(()=>{
        temp.style.backgroundColor="white";
    },500);
    setTimeout(()=>{
        temp.style.backgroundColor=getEle;
    },900)
   
    console.log("Yaha",temp);
}

