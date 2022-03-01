// ScorePanel记分牌的类
class ScorePanel {
    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    //设置一个变量限制最大等级
    maxLevel: number
    //设置升级跨度分数
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分方法
    addScore() {
        // 分数自增
        this.scoreEle.innerHTML = ++this.score + '';

        //每次达到跨度分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 等级提升
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel;
