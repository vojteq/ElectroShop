package pl.vojteq.electro_shop.backend.security;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AuthenticationRequest {

    private String username;
    private String password;

}
