import Food from './food';
import Score from './score';
import Snake from './snake';

class Game{
    food: Food;
    score: Score;
    snake: Snake;
    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.food = new Food();
        this.score = new Score();
        this.snake = new Snake();
        this.init();
    }

    init():void {
        // 🐍移动  键盘监听
        document.addEventListener('keydown',this.KeydownEvent.bind(this));
        this.food.change();
        this.run();
    }

    KeydownEvent(keyEvent:KeyboardEvent):void {
        // this.direction = keyEvent.key.includes('Arrow') ? keyEvent.key : '';
        this.direction =  keyEvent.key;
    }   

    run():void {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction){
            case "ArrowUp": 
            case "Up": 
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        this.isEatFood(X,Y);
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(e){
            this.isLive = false;
            alert(e.message)
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.score.level -1) * 30 );
    }

    isEatFood(x:number, y:number):void {
        if(this.food.X === x && this.food.Y === y){
            this.food.change();
            this.score.addScore();
            this.snake.addBody();
        }
    }
}

export default Game