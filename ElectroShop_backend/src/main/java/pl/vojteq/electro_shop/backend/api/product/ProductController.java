package pl.vojteq.electro_shop.backend.api.product;

import lombok.AllArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;
import pl.vojteq.electro_shop.backend.domain.product.Product;
import pl.vojteq.electro_shop.backend.domain.product.ProductService;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@AllArgsConstructor
public class ProductController {

    private final ProductService service;

    private final ProductModelAssembler assembler;

    @GetMapping("/products")
    CollectionModel<EntityModel<Product>> getAllProducts() {
        List<EntityModel<Product>> products = service.findAll()
                .stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(
                products,
                linkTo(methodOn(ProductController.class).getAllProducts()).withSelfRel()
        );
    }

    @GetMapping("/products/{id}")
    EntityModel<Product> getProduct(@PathVariable UUID id) {
        Product product = service.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));

        return assembler.toModel(product);
    }

    @PostMapping("/products")
    Product createProduct(@RequestBody Product product) {
        return service.createOrUpdateProduct(product);
    }

    @PostMapping("/products/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable UUID id) {
        return service.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setCategory(newProduct.getCategory());
                    product.setSubcategory(newProduct.getSubcategory());
                    product.setDescription(newProduct.getDescription());
                    return service.createOrUpdateProduct(product);
                })
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return service.createOrUpdateProduct(newProduct);
                });
    }
}
