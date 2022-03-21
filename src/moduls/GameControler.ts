import { chromeDirection, ieDirection } from "../Interface";
import { isHorizontal, isVertical } from "../Utils/direction";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏控制器 控制其他的类
class GameControler {
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;
  // 存储一个蛇的前进方向
  direction: string = chromeDirection.right || ieDirection.right

  constructor() {
    this.snake = new Snake;
    this.food = new Food;
    this.scorePanel = new ScorePanel(10, 1);

    this.init();
  }

  // 游戏初始化方法 调用后游戏开始
  init() {
    // 绑定键盘事件
    console.log(this);
    document.addEventListener('keydown', this.keydownHandle.bind(this));
    this.move()
  }

  /** ArrowUp/ArrowDown/ArrowLeft/ArrowRight
   * 创建一个键盘按下的响应事件
   * @param evt 
   */
  keydownHandle(evt: KeyboardEvent) {
    evt.preventDefault();
    if (evt.key === this.direction) {
      return
    }
    if (this.snake.bodies.length > 1) {
      // 当有蛇身时，禁止同一个坐标方向的移动
      if (isHorizontal(this.direction) && isHorizontal(evt.key)
        || isVertical(this.direction) && isVertical(evt.key)) {
        return
      }
    }
    if (isHorizontal(evt.key) || isVertical(evt.key)) {
      // 只能是方向键才赋方向值
      this.direction = evt.key
      console.log(this)
    }

  }

  /**
   * 根据控制器存储的方向this.direction 使蛇的坐标改变
   * 向上 top 减少
   * 向下 top 增加
   * 向左 left 减少
   * 向右 left 增加
   */
  move() {
    let x = this.snake.X
    let y = this.snake.Y
    // 读取方向属性, 移动一格
    switch (this.direction) {
      case chromeDirection.up || ieDirection.up:
        // 每次移动是一格(10px)的倍数
        y -= 10
        break;
      case chromeDirection.down || ieDirection.down:
        y += 10
        break;
      case chromeDirection.left || ieDirection.left:
        x -= 10
        break;
      case chromeDirection.right || ieDirection.right:
        x += 10
        break;
      default:
        break;
    }
    // 移动前检查是否吃到食物
    this.checkEat(x, y)
    try {
      // 将计算好的局部变量赋值给对象上的属性  设置后会触发Snake类的set语句
      this.snake.X = x
      this.snake.Y = y
    } catch (error) {
      // 捕获的异常 即此时超出合理范围
      alert((error as Error).message + 'Game Over!')
      // 设置蛇的生命状态
      this.snake.isLive = false
    }
    //活着的蛇开启一个定时器让蛇一直向保存的方向移动 注意定时器的默认this是window
    this.snake.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  /**
   * 检查是否吃到食物
   * @param X 蛇头横坐标
   * @param Y 蛇头纵坐标
   */
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      console.log('吃到食物');
      // 食物位置重置
      this.food.change();
      // 面板加分
      this.scorePanel.addScore();
      // 身体变长
      this.snake.addBody();
    }
  }
}

export default GameControler;