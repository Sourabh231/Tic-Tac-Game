console.log('Welcome to Tic tac toe');

let turn = 'X';
let gameover=false;

//Function to change the turn 
const changeTurn =()=>{
    return turn === 'X'?'0':'X'
}

//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
   let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ]
   win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='')){
             document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Will Won'
        }
   });
}

//Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
           turn=changeTurn();
            checkWin();
            if(gameover){
                document.getElementsByClassName('info')[0].innerText= 'Turn For' + turn;
            }
            
        }
    });
});

//onclick for reset button

restart.addEventListener('click',(element)=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerHTML="";
    });
    turn='X';
    gameover = false
    document.getElementsByClassName('info')[0].innerHTML = 'Turn For' + turn;
})