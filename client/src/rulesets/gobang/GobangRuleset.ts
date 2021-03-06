import GameState from "src/online/play/GameState";
import Bindable from "src/utils/bindables/Bindable";
import ChessHost from "../chess_host";
import GameRule from "../GameRule";
import Ruleset from "../Ruleset";
import GobangDrawableChessboard from "./ui/GobangDrawableChessboard";
import GobangGameRule from "./GobangGameRule";
import GobangUserPlayInput from "./GobangUserPlayInput";
import GobangClient from "./GobangClient";
import GobangGameSettings from "./GobangGameSettings";

export default class GobangRuleset extends Ruleset {
  // eslint-disable-next-line
  public createUserPlayInput(
    game: GameRule,
    gameState: Bindable<GameState>,
    localChessHost: Bindable<ChessHost | null>,
  ) {
    return new GobangUserPlayInput(
      game as GobangGameRule,
      gameState,
      localChessHost,
    );
  }

  // eslint-disable-next-line
  public createGameRule() {
    return new GobangGameRule(this.gameSettings as GobangGameSettings);
  }

  // eslint-disable-next-line
  public createRulesetClient(game: GameRule) {
    return new GobangClient(game);
  }

  // eslint-disable-next-line
  public createChessboard(stage: {width: number, height: number}, screen: any) {
    return new GobangDrawableChessboard(stage,
      (this.gameSettings as GobangGameSettings).chessboardSize);
  }
}
