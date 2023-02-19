import {getInputDir} from './input.js'
export const SNAKE_SPEED=5;

let newPieces=0

let snakeBody=[
    {x:10,y:10},
   
]

export function update(){
    addPiece()
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
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
    })
  }
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}
function addPiece(){
    for (let i = 0; i < newPieces; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
      }
    newPieces=0;
}
export function getHeadSnake(){
    return snakeBody[0]
}
export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true })
}
