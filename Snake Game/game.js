import {SNAKE_SPEED,update as updateSnake,draw as drawSnake,snakeIntersection,getHeadSnake} from "./snake.js"
import { update as updateFood,draw as drawFood } from "./food.js"

const board=document.getElementById("board")

let lastTimeRender=0
let gameOver=false

function main(currentTime){
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location = '/'
        }
        return
      }
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
    checkDeath()

}
function draw(){
    drawSnake(board)
    drawFood(board)
}

function checkDeath(){
    gameOver=outsideGride(getHeadSnake()) || snakeIntersection()
}
function outsideGride(head){
    return head.x<1 || head.x>20 || head.y<1 || head.y>20

}