import {getInputDir} from './input.js'
export const SNAKE_SPEED=5;

let newPieces=0

let snakeBody=[
    {x:10,y:10},
   
]

export function update(){
    let inputDirection=getInputDir()
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]}
    }
    snakeBody[0].x+=inputDirection.x
    snakeBody[0].y+=inputDirection.y

}
export function draw(board){
    snakeBody.forEach(piece =>{
        const snakePiece=document.createElement("div");
        snakePiece.style.gridRowStart=piece.y;
        snakePiece.style.gridColumnStart=piece.x;
        snakePiece.classList.add('snake')
        board.appendChild(snakePiece)
    })
}
export function expandSnake(amount){
    newPieces+=amount
}
export function onSnake(foo){
    return snakeBody.some(p => {
        return p.x===foo.x && p.y===foo.y
    })
}
function addPiece(){
    
}