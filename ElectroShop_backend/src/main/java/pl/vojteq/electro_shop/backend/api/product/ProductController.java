package pl.vojteq.electro_shop.backend.api.product;

import lombok.AllArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;
import pl.vojteq.electro_shop.backend.common.exception.NotFoundException;
import pl.vojteq.electro_shop.backend.domain.category.Category;
import pl.vojteq.electro_shop.backend.domain.category.CategoryService;
import pl.vojteq.electro_shop.backend.domain.comment.Comment;
import pl.vojteq.electro_shop.backend.domain.comment.CommentService;
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

    private final ProductService productService;

    private final ProductModelAssembler assembler;

    private final CommentService commentService;

    private final CategoryService categoryService;

    @GetMapping("/products")
    CollectionModel<EntityModel<Product>> getAllProducts() {
        List<EntityModel<Product>> products = productService.findAll()
                .stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(
                products,
                linkTo(methodOn(ProductController.class).getAllProducts()).withSelfRel()
        );
    }

    @GetMapping("/products/{productId}")
    EntityModel<Product> getProduct(@PathVariable UUID productId) {
        Product product = productService.findById(productId)
                .orElseThrow(() -> new ProductNotFoundException(productId));

        return assembler.toModel(product);
    }

    @GetMapping("/products/categories/{categoryId}")
    CollectionModel<EntityModel<Product>> getProductsFromCategory(@PathVariable UUID categoryId) {
        Category category = categoryService.findById(categoryId)
                .orElseThrow(() -> new NotFoundException(categoryId, "CATEGORY"));
        List<EntityModel<Product>> products = productService.findByCategory(category)
                .stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(
                products,
                linkTo(methodOn(ProductController.class).getProductsFromCategory(categoryId)).withSelfRel()
        );
    }

    @PostMapping("/products")
    Product createProduct(@RequestBody Product product) {
        return productService.createOrUpdateProduct(product);
    }

    @PostMapping("/products/{productId}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable UUID productId) {
        return productService.findById(productId)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setCategory(newProduct.getCategory());
                    product.setSubcategory(newProduct.getSubcategory());
                    product.setDescription(newProduct.getDescription());
                    product.setComments(newProduct.getComments());
                    return productService.createOrUpdateProduct(product);
                })
                .orElseGet(() -> {
                    newProduct.setId(productId);
                    return productService.createOrUpdateProduct(newProduct);
                });
    }

    @PostMapping("/products/{productId}/addComment")
    Product addComment(@RequestBody Comment comment, @PathVariable UUID productId) {
        return productService.findById(productId)
                .map(product -> {
                    Comment c = commentService.createOrUpdateComment(comment);
                    System.out.println("\n\nNEW COMMENT: \n" + c + "\n\n");
                    product.addComment(c);
                    return productService.createOrUpdateProduct(product);
                })
                .orElseThrow(() -> new ProductNotFoundException(productId));
    }
}
