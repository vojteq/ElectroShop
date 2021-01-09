package pl.vojteq.electro_shop.backend.domain.category;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface SubcategoryRepository extends JpaRepository<Subcategory, UUID> {

    List<Subcategory> findByCategory(Category category);

    List<Subcategory> findByCategoryOrderByNameAsc(Category category);
}
