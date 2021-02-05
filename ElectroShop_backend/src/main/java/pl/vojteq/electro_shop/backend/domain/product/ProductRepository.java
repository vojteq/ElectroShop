package pl.vojteq.electro_shop.backend.domain.product;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.vojteq.electro_shop.backend.domain.category.Subcategory;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {

    List<Product> findBySubcategory(Subcategory subcategory);

//    List<Product> findBySubcategoryWithin(List<Subcategory> subcategories);
//
//    List<Product> findBySubcategoryNameOrderByName(Subcategory subcategory);

    void deleteById(UUID uuid);
}
