class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    //蛇的容器
    snake: HTMLElement;
    // 记录蛇的状态
    isLive: boolean;

    constructor() {
        this.snake = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.snake.getElementsByTagName('div')
        this.isLive = true;
    }

    // 获取蛇头坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标  setter的用法：当设置该X值时调用set语句体内方法
    set X(value: number) {
        if (this.X === value) {
            return
        }
        // 30格的合法范围是0-290  利用好JS的异常捕获功能
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }
        // 先移动身体,从后往前赋值避免丢失原有位置
        this.moveBody()
        this.head.style.left = value + 'px';
        // 移动前检查是否吃到自己
        this.checkSuicide()
    }

    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        // 30格的合法范围是0-290  利用好JS的异常捕获功能
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }
        // 先移动身体,从后往前赋值避免丢失原有位置
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkSuicide()
    }

    // 蛇增加长度
    addBody() {
        const div = document.createElement('div')
        // 向element中添加一个div
        this.snake.insertAdjacentElement('beforeend', div)
    }

    /**
     * 蛇身体移动 第n节像素身体位置 = 第(n-1)节身体的位置
     * eg： 第4节 = 第3节位置 从后往前赋值避免丢失原有位置
     */
    moveBody() {
        // 遍历蛇身像素点 从最大索引开始
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取上前面身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    /** 蛇头撞到蛇身检查 
     * 第四个以上的身体才可能被撞到
    */
    checkSuicide() {
        for (let i = 3; i < this.bodies.length; i++) {
            const body = this.bodies[i] as HTMLElement;
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                // 吃到自己
                throw new Error("吃到自己啦~~~");
            }
        }
    }

}

export default Snake;