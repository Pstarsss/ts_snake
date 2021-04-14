class Snake{

    head: HTMLElement; 
    bodies: HTMLCollection;
    snake: HTMLElement;

    constructor() {
        this.snake = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value) {
        if(value === this.X){
            return ;
        }

        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了');
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.biteMyself();

    }

    set Y(value) {
        if(value === this.Y){
            return ;
        }

        if(value > 290 || value < 0){
            throw new Error('蛇撞墙了');
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        console.log()
        this.moveBody();
        this.head.style.top = value + 'px';
        this.biteMyself();
    }

    addBody() {
        this.snake.insertAdjacentElement("beforeend",document.createElement('div'));
    }

    moveBody() {
        for(let i = this.bodies.length -1 ;i > 0;i --){
            let pre_x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let pre_y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            
            (this.bodies[i] as HTMLElement).style.left = pre_x + 'px';
            (this.bodies[i] as HTMLElement).style.top = pre_y + 'px';
        }
    }

    biteMyself() {
       for(let i = 1;i< this.bodies.length ;i++){
           let temp = this.bodies[i] as HTMLElement;
           if(this.X === temp.offsetLeft && this.Y === temp.offsetTop){
                throw new Error('蛇咬到自己了');
           } 
       } 
    }
}   


export default Snake
