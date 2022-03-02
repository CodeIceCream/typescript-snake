// 引入样式
import "./style/index.less";
import Food from './moduls/Food'
import ScorePanel from "./moduls/ScorePanel";
import GameControler from "./moduls/GameControler";

// // Food类测试代码
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

// // ScorePanel类测试代码
// const scorePanel = new ScorePanel(20,30);
// for (let i = 0; i < 99; i++) {
//     scorePanel.addScore();
// }

const gameControler = new GameControler();

