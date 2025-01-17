package pl.vojteq.electro_shop.backend.domain.product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.vojteq.electro_shop.backend.domain.category.Category;
import pl.vojteq.electro_shop.backend.domain.category.Subcategory;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(UUID id) {
        return productRepository.findById(id);
    }

    public List<Product> findBySubcategory(Subcategory subcategory) {
        return productRepository.findBySubcategory(subcategory);
    }

//    public List<Product> findBySubcategoryOrderedByName(Subcategory subcategory) {
//        return productRepository.findBySubcategoryNameOrderByName(subcategory);
//    }
//
    public List<Product> findByCategory(Category category) {
        return productRepository.findByCategory(category);
    }

    public Product createOrUpdateProduct(Product product) {
        return productRepository.save(product);
    }

    public void removeProduct(UUID id) {
        productRepository.deleteById(id);
    }
}
