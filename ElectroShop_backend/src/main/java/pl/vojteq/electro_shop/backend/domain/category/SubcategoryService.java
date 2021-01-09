package pl.vojteq.electro_shop.backend.domain.category;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    public List<Subcategory> findByCategory(Category category) {
        return subcategoryRepository.findByCategory(category);
    }

    public List<Subcategory> findByCategoryOrderedByName(Category category) {
        return subcategoryRepository.findByCategoryOrderByNameAsc(category);
    }

    public Subcategory createOrUpdateSubcategory(Subcategory subcategory) {
        return subcategoryRepository.save(subcategory);
    }
}
