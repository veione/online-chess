package io.github.hulang1024.chess.user;

public class GuestUser extends User {
    private static long id = -101;
    public GuestUser() {
        this.setId(id--);
        this.setNickname("Guest");
    }
}