package pl.vojteq.electro_shop.backend.domain.user;

import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Objects;
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

//    @NotNull
    private String userName;

    private String firstName;

    private String lastName;

//    @NotNull
    @Email
    private String email;

    private String password;

    private String roles = "USER,ADMIN"; //todo

//    @NotNull
//    private String login;
//
//    @NotNull
//    private String password;

    @Nullable
    @Embedded
    private Address address;

    private boolean active = true;


    public User(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

//    public User(@NotNull String userName, String firstName, String lastName, @NotNull String email, Address address) {
//        this.userName = userName;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.email = email;
//        this.address = address;
//    }

    public User(String userName, String firstName, String lastName, String email, String password, Address address) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    public User(String userName, String firstName, String lastName, String email, String password) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) &&
                userName.equals(user.userName) &&
                Objects.equals(firstName, user.firstName) &&
                Objects.equals(lastName, user.lastName) &&
                email.equals(user.email) &&
                Objects.equals(address, user.address);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, firstName, lastName, email, address);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", address=" + address +
                '}';
    }
}
