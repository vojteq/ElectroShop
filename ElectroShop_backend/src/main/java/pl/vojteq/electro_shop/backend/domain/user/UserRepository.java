package pl.vojteq.electro_shop.backend.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

    List<User> findByAddress_City(String city);

    Optional<User> getUserByUserName(String userName);

    void deleteById(UUID id);
}
