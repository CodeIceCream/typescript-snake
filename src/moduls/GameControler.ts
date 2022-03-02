import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

// 游戏控制器 控制其他的类
class GameControler {
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;
  // 存储一个蛇的前进方向
  direction: string = ''
  // 记录蛇的状态
  isLive: boolean = true

  constructor() {
    this.snake = new Snake;
    this.food = new Food;
    this.scorePanel = new ScorePanel;

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
    this.direction = evt.key
    console.log(this)

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
    case 'ArrowUp':
    case 'Up':
      // 每次移动是一格(10px)的倍数
      y -= 10
      break;
    case 'ArrowDown':
    case 'Down':
      y += 10
      break;
    case 'ArrowLeft':
    case 'Left':
      x -=10
      break;
    case 'ArrowRight':
    case 'Right':
      x += 10
      break;
    }

    // 将计算好的局部变量赋值给对象上的属性
    this.snake.X = x
    this.snake.Y = y

    //活着的蛇开启一个定时器让蛇一直向保存的方向移动 注意定时器的默认this是window
    this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
}

export default GameControler;