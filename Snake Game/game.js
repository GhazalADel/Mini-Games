import {SNAKE_SPEED,update as updateSnake,draw as drawSnake} from "./snake.js"
import { update as updateFood,draw as drawFood } from "./food.js"

const board=document.getElementById("board")

let lastTimeRender=0

function main(currentTime){
    window.requestAnimationFrame(main)
    let timeUsed=(currentTime-lastTimeRender)/1000
    if(timeUsed<1/SNAKE_SPEED){
        return
    }
    lastTimeRender=currentTime
    update()
    draw()
}
window.requestAnimationFrame(main)
function update(){
    board.innerHTML=''
    updateSnake()
    updateFood()

}
function draw(){
    drawSnake(board)
    drawFood(board)
}