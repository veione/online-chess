package io.github.hulang1024.chess.user;

import io.github.hulang1024.chess.http.AccessToken;
import io.github.hulang1024.chess.http.results.Result;
import lombok.Data;

@Data
public class LoginResult extends Result {
    private AccessToken accessToken;
    private User user;

    /**
     *
     * @param code 0=成功，1=用户不存在，2=密码错误，3=第三方用户登录失败，100=已被ban
     */
    private LoginResult(int code) {
        super(code);
    }

    public static LoginResult ok() {
        return new LoginResult(0);
    }

    public static LoginResult fail(int code) {
        return new LoginResult(code);
    }
}