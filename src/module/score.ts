class Score{
    score = 0;
    level = 1;


    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor() {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    addScore() { 
        this.scoreEle.innerHTML = ++ this.score + '';
        if(this.score % 10 === 0 ){
            this.addLevel();
        }
    }

    addLevel() {
        if(this.level == 10){

        } else{
            this.levelEle.innerHTML = ++ this.level + '';
        }
    }

}
export default Score