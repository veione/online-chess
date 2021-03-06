import Chess from "src/rulesets/chinesechess/Chess";
import ChessHost from "src/rulesets/chess_host";
import { chessClassToText } from "src/rulesets/chinesechess/chess_map";
import './judgement.scss';

const TRANSITION_DURATION = 200;

export default class DrawableEatJudgement {
  public el: HTMLDivElement;

  private sub: HTMLDivElement;

  private timer: NodeJS.Timeout | null;

  constructor() {
    const el = document.createElement('div');
    el.className = 'judgement eat-judgement absolute-center z-top';
    const title = document.createElement('div');
    title.className = 'title';
    title.innerText = '吃';
    el.appendChild(title);

    const sub = document.createElement('div');
    this.sub = sub;
    el.appendChild(sub);
    this.el = el;
  }

  public show(eatenChess: Chess) {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      this.el.classList.remove('show');
      setTimeout(() => this.show(eatenChess), TRANSITION_DURATION);
      return;
    }

    this.el.style.display = 'block';
    const colorClass = eatenChess?.getHost() == ChessHost.FIRST ? 'red' : 'black';
    this.sub.innerHTML = `（<span class="chess-name ${colorClass}">`
      + `${chessClassToText(eatenChess)}</span>被吃）`;
    this.el.classList.add('show');

    this.timer = setTimeout(() => {
      this.el.classList.remove('show');
      this.timer = null;
      setTimeout(() => {
        this.el.style.display = 'none';
      }, TRANSITION_DURATION + 50);
    }, 2000);
  }
}
