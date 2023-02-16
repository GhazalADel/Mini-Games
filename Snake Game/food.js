import { expandSnake,onSnake } from "./snake.js" 


let food={x:1,y:1}
const GROWTH_RATE=1

export function update(){
    if(onSnake(food)){
        expandSnake(GROWTH_RATE)
        food={x:2,y:2}
    }


}
export function draw(board){
    const foodPiece=document.createElement("div")
    foodPiece.style.gridRowStart=food.x
    foodPiece.style.gridColumnStart=food.y
    foodPiece.classList.add("food")
    board.appendChild(foodPiece)
}