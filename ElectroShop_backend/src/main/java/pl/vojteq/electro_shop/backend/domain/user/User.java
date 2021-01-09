package pl.vojteq.electro_shop.backend.domain.user;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotNull
    private String userName;

    private String firstName;

    private String lastName;

    @NotNull
    private String email;

//    @NotNull
//    private String login;
//
//    @NotNull
//    private String password;

    @Embedded
    private Address address;


    public User(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
}
