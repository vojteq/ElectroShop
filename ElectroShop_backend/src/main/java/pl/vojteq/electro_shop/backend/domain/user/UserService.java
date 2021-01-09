package pl.vojteq.electro_shop.backend.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(UUID id) {
        return userRepository.findById(id);
    }

    public List<User> findByCity(String city) {
        return userRepository.findByAddress_City(city);
    }

    public User createOrUpdateUser(User user) {
        return userRepository.save(user);
    }

    public void removeUser(UUID id) {
        userRepository.deleteById(id);
    }
}
