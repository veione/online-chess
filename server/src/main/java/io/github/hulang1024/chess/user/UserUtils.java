package io.github.hulang1024.chess.user;

public class UserUtils {
    private static final ThreadLocal<User> THREAD_LOCAL = new ThreadLocal();

    public static void set(User user) {
        if (user != null) {
            THREAD_LOCAL.set(user);
        } else {
            clear();
        }
    }

    public static void clear() {
        THREAD_LOCAL.remove();
    }

    public static User get() {
        return THREAD_LOCAL.get();
    }
}