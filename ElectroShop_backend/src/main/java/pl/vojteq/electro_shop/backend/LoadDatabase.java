package pl.vojteq.electro_shop.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pl.vojteq.electro_shop.backend.domain.comment.Comment;
import pl.vojteq.electro_shop.backend.domain.comment.CommentService;
import pl.vojteq.electro_shop.backend.domain.product.Product;
import pl.vojteq.electro_shop.backend.domain.product.ProductRepository;
import pl.vojteq.electro_shop.backend.domain.product.ProductService;
import pl.vojteq.electro_shop.backend.domain.user.Address;
import pl.vojteq.electro_shop.backend.domain.user.User;
import pl.vojteq.electro_shop.backend.domain.user.UserRepository;
import pl.vojteq.electro_shop.backend.domain.user.UserService;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@Configuration
public class LoadDatabase {

    private static final Logger logger = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initUsers(UserService userService, ProductService productService, CommentService commentService) {
        return args -> {
            if (userService.findAll().isEmpty()) {
                logger.info("USER REPOSITORY WAS EMPTY");
                userService.createOrUpdateUser(new User(
                        "vojteq",
                        "Wojtek",
                        "An",
                        "v@gmail.com",
                        "vojteq",
                        new Address("Kraków", "Krakowska", 10)));
                userService.createOrUpdateUser(new User(
                        "kov",
                        "Jan",
                        "Kowalski",
                        "kov@gmail.com",
                        "kov",
                        new Address("Warszawa", "Warszwska", 10, 15)));
                userService.findAll().forEach(user -> logger.info("Preloading user: " + user));
            }

            if (productService.findAll().isEmpty()) {
                logger.info("PRODUCT REPOSITORY WAS EMPTY");
//                File file = new File("pictures/gpu.png");
//                System.out.println("file size: " + file.length());
//                byte[] picture = new byte[(int) file.length()];
//                FileInputStream fileInputStream = new FileInputStream(file);
//                fileInputStream.read(picture);
//                fileInputStream.close();

//                BufferedImage bufferedImage = ImageIO.read(new File(System.getProperty("user.dir") + "\\ElectroShop_backend\\src\\main\\resources\\images\\gpu.png"));
//                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
//                ImageIO.write(bufferedImage, "png", outputStream);
//                byte[] image = outputStream.toByteArray();
//                productRepository.save(new Product("processor", "some processor", image));
//                productRepository.save(new Product("graphic card", "high end graphic card", image));

                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'");
                dateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
                String date = dateFormat.format(new Date());

                Product product = productService.createOrUpdateProduct(new Product("processor", "some processor"));
                Comment comment = new Comment(product.getId(), "vojteq", 3, "comment about processor", date);
                product.addComment(comment);
                commentService.createOrUpdateComment(comment);
                productService.createOrUpdateProduct(product);

                product = productService.createOrUpdateProduct(new Product("graphic card", "high end graphic card"));
                comment = new Comment(product.getId(), "vojteq", 5, "great card", date);
                product.addComment(comment);
                commentService.createOrUpdateComment(comment);
                productService.createOrUpdateProduct(product);

                productService.findAll().forEach(p -> logger.info("Preloading product: " + p));
            }
        };
    }
}
