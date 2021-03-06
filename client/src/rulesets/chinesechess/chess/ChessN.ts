import ChessPos from "../ChessPos";
import Game from "../Game";
import AbstractChess from "./AbstractChess";
import { sign } from "./move_rules";

/**
 * 马
 */
export default class ChessN extends AbstractChess {
  canGoTo(destPos: ChessPos, game: Game): boolean {
    // 马走“日”，蹩马腿
    const rowOffset = destPos.row - this.pos.row;
    const colOffset = destPos.col - this.pos.col;

    if (Math.abs(rowOffset) == 2 && Math.abs(colOffset) == 1) {
      return game.getChessboard().isEmpty(this.pos.row + sign(rowOffset), this.pos.col);
    }
    if (Math.abs(rowOffset) == 1 && Math.abs(colOffset) == 2) {
      return game.getChessboard().isEmpty(this.pos.row, this.pos.col + sign(colOffset));
    }
    return false;
  }
}
