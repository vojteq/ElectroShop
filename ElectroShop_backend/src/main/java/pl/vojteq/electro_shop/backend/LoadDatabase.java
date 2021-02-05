package pl.vojteq.electro_shop.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.vojteq.electro_shop.backend.domain.product.Product;
import pl.vojteq.electro_shop.backend.domain.product.ProductRepository;
import pl.vojteq.electro_shop.backend.domain.user.Address;
import pl.vojteq.electro_shop.backend.domain.user.User;
import pl.vojteq.electro_shop.backend.domain.user.UserRepository;

@Configuration
public class LoadDatabase {

    private static final Logger logger = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initUsers(UserRepository userRepository, ProductRepository productRepository) {
        return args -> {
            userRepository.save(new User(
                    "vojteq",
                    "Wojtek",
                    "An",
                    "v@gmail.com",
                    new Address("Kraków", "Krakowska", 10)));
            userRepository.save(new User(
                    "kov",
                    "Jan",
                    "Kowalski",
                    "kov@gmail.com",
                    new Address("Warszawa", "Warszwska", 10, 15)));
            userRepository.findAll().forEach(user -> logger.info("Preloading user: " + user));


            productRepository.save(new Product("processor"));
            productRepository.save(new Product("graphic card", "high end graphic card"));
            productRepository.findAll().forEach(product -> logger.info("Preloading product: " + product));
        };
    }
}
