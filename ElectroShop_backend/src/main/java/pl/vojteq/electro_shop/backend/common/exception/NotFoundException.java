package pl.vojteq.electro_shop.backend.common.exception;

import java.util.UUID;

public class NotFoundException extends RuntimeException {

    public NotFoundException(UUID id, String type) {
        super("Could not find " + type + " with ID: " + id);
    }
}
