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

import java.io.File;
import java.io.FileInputStream;

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


            File file = new File("/pictures/gpu.jpg");
            System.out.println("file size: " + file.length());
            byte[] picture = new byte[(int) file.length()];
            FileInputStream fileInputStream = new FileInputStream(file);
            fileInputStream.read(picture);
            fileInputStream.close();
            productRepository.save(new Product("processor", "some processor", picture));
            productRepository.save(new Product("graphic card", "high end graphic card", picture));
            productRepository.findAll().forEach(product -> logger.info("Preloading product: " + product));
        };
    }
}
