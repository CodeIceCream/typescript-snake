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

    // 设置蛇头的坐标  setter的用法：当设置该X值时调用set语句体内方法
    set X(value:number){
        if (this.X === value) {
            return
        }
        // 30格的合法范围是0-290  利用好JS的异常捕获功能
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }
        this.head.style.left = value + 'px';
    }

    set Y(value:number){
        if (this.Y === value) {
            return
        }
        // 30格的合法范围是0-290  利用好JS的异常捕获功能
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }
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