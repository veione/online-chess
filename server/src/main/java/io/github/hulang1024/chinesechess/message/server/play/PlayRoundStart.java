package io.github.hulang1024.chinesechess.message.server.play;

import io.github.hulang1024.chinesechess.message.ServerMessage;
import lombok.Data;

/**
 * 棋局开始
 * @author HuLang
 */
@Data
public class PlayRoundStart extends ServerMessage {
    /**
     * 棋方：0=黑方，1=红方
     */
    private int chessHost;

    public PlayRoundStart() {
      super("play.round_start");
    }
}
