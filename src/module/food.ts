class Food{

    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    get X():number {
        return this.element.offsetLeft;
    }

    get Y():number {
        return this.element.offsetTop;
    }

    change():void {

        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';

    }
}

export default Food