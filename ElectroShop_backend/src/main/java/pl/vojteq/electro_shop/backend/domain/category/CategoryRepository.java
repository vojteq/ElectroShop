package pl.vojteq.electro_shop.backend.domain.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID> {
    //todo
    Optional<Category> findById(UUID id);
}
