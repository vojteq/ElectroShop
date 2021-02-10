package pl.vojteq.electro_shop.backend.api.product;

import java.util.UUID;

public class ProductNotFoundException extends RuntimeException {
    ProductNotFoundException(UUID id) {
        super("Could not find product with ID: " + id);
    }
}
