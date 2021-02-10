package pl.vojteq.electro_shop.backend.api.user;

import java.util.UUID;

public class UserNotFoundException extends RuntimeException {
    UserNotFoundException(UUID id) {
        super("Could not find user with ID: " + id);
    }
}
