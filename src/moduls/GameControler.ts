import Food from "./Food";
import Snake from "./Snack";
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
  direction:string = ''


  constructor(){
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
  }

  /** ArrowUp/ArrowDown/ArrowLeft/ArrowRight
   * 创建一个键盘按下的响应事件
   * @param evt 
   */
  keydownHandle(evt:KeyboardEvent){
    this.direction = evt.key
    console.log(this)
    
  }
}

export default GameControler;