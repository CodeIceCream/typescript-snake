class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    //蛇的容器
    snack: HTMLElement;

    constructor() {
        this.snack = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.snack.getElementsByTagName('div')
    }

    // 获取蛇头坐标
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
    return this.head.offsetTop;
    }

    set X(value:number){
        this.head.style.left = value + 'px';
    }

    set Y(value:number){
        this.head.style.top = value + 'px'
    }
    // 蛇增加长度的方法
    addBody(){
        const div = document.createElement('div')
        // 向element中添加一个div
        this.snack.insertAdjacentElement('beforeend', div)
    }
}

export default Snake;