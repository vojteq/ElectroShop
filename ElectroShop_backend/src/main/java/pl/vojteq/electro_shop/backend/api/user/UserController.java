package pl.vojteq.electro_shop.backend.api.user;

import lombok.AllArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;
import pl.vojteq.electro_shop.backend.domain.user.User;
import pl.vojteq.electro_shop.backend.domain.user.UserService;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
//@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    private final UserModelAssembler userModelAssembler;


    @GetMapping("/users")
    CollectionModel<EntityModel<User>> getAllUsers() {
//        List<User> users = userService.findAll();
//        return userModelAssembler.toCollectionModel(users);

        List<EntityModel<User>> users = userService.findAll()
                .stream()
                .map(userModelAssembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(
                users,
                linkTo(methodOn(UserController.class).getAllUsers()).withSelfRel()
        );
    }

    @GetMapping("users/{id}")
    EntityModel<User> getUser(@PathVariable UUID id) {
        User user = userService.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));

        return userModelAssembler.toModel(user);
    }

    @PostMapping("/users")
    User createUser(@RequestBody User user) {
        return userService.createOrUpdateUser(user);
    }

    @PostMapping("users/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable UUID id) {
        return userService
                .findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.setEmail(newUser.getEmail());
                    user.setAddress(newUser.getAddress());
                    return userService.createOrUpdateUser(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return userService.createOrUpdateUser(newUser);
                });
    }
}
