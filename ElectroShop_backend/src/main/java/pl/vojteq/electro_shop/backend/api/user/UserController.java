package pl.vojteq.electro_shop.backend.api.user;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.vojteq.electro_shop.backend.common.exception.NotFoundException;
import pl.vojteq.electro_shop.backend.domain.user.Address;
import pl.vojteq.electro_shop.backend.domain.user.User;
import pl.vojteq.electro_shop.backend.domain.user.UserService;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<UserResponse> findAll() {
        return userService.findAll()
                .stream()
                .map(UserResponse::fromUser)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public UserResponse findById(@PathVariable UUID id) {
        final User user = userService
                .findById(id)
                .orElseThrow(() -> new NotFoundException("User with id <" + id + "> does not exist"));

        return UserResponse.fromUser(user);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse createUser(@RequestBody @Valid CreateUserRequest request) {
        final User user = userService.createOrUpdateUser(request.toUser());

        return UserResponse.fromUser(user);
    }

    //todo

    @Data
    @Builder
    static class UserResponse {

        private UUID id;
        private String userName;
        private String firstName;
        private String lastName;
        private String email;
        private Address address;

        static UserResponse fromUser(User user) {
            return UserResponse.builder()
                    .id(user.getId())
                    .userName(user.getUserName())
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .email(user.getEmail())
                    .address(user.getAddress())
                    .build();
        }
    }

    @Data
    static class CreateUserRequest {

        @NotNull
        private String userName;

        @NotNull
        private String email;


        User toUser() {
            return new User(userName, email);
        }
    }

    @Data
    static class UpdateUserRequest {

        @NotNull
        private String userName;

        @NotNull
        @Pattern(regexp = ".*@.*")
        private String email;
    }
}
