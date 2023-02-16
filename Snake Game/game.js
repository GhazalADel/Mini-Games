import {SNAKE_SPEED,update as updateSnake,draw as drawSnake} from "./snake.js"

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
    updateSnake()

}
function draw(){
    drawSnake(board)
}