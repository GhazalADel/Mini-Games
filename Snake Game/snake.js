export const SNAKE_SPEED=2;

let snakeBody=[
    {x:10,y:10}
]

export function update(){

}
export function draw(board){
    snakeBody.forEach(piece =>{
        const snakePiece=document.createElement("div");
        snakePiece.style.gridRowStart=piece.x;
        snakePiece.style.gridColumnStart=piece.y;
        snakePiece.classList.add('snake')
        board.appendChild(snakePiece)
    })
}