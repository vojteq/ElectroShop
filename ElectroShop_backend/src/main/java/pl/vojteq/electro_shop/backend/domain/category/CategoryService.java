package pl.vojteq.electro_shop.backend.domain.category;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CategoryService {
//todo
    private final CategoryRepository repository;

    public Optional<Category> findById(UUID id) {
        return repository.findById(id);
    }
}
