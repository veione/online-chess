package io.github.hulang1024.chinesechess.user.login;

import io.github.hulang1024.chinesechess.http.AccessToken;
import lombok.Data;

@Data
public class LoginResult {
    /**
     * 0=成功，1=用户不存在，2=密码错误
     */
    private int code;
    private AccessToken accessToken;
    private long userId;

    public static LoginResult ok() {
        LoginResult ret = new LoginResult();
        ret.code = 0;
        return ret;
    }

    public static LoginResult fail(int code) {
        LoginResult ret = new LoginResult();
        ret.code = code;
        return ret;
    }
}
