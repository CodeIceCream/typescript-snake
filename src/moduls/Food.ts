// 食物类
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;
    
    constructor() {
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置
    change() {
        // 生成一个合理的随机位置
        // 最小位置是0 最大是290 考虑蛇大小10px 位置必须是十的倍数
        
        let top = Math.floor(Math.random() * 30) * 10;
        let left = Math.floor(Math.random() * 30) * 10;
        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }
}


export default Food;
