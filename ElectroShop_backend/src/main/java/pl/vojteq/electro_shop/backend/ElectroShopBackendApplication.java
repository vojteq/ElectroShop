package pl.vojteq.electro_shop.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import pl.vojteq.electro_shop.backend.domain.user.UserRepository;

@SpringBootApplication
//@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class ElectroShopBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(ElectroShopBackendApplication.class, args);
    }

}
