package io.github.hulang1024.chess.invitation;

import io.github.hulang1024.chess.http.results.Result;
import io.github.hulang1024.chess.room.Room;
import io.github.hulang1024.chess.spectator.SpectateResponse;
import lombok.Data;

@Data
public class ReplyResult extends Result {
    private Room playRoom;

    private SpectateResponse spectateResponse;

    /**
     * @param code 2=邀请者现在不在线，3=邀请者当前不在游戏中，4=加入房间失败，5=被邀请者正在游戏中
     */
    protected ReplyResult(int code) {
        super(code);
    }
}