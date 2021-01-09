package pl.vojteq.electro_shop.backend.domain.user;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data       //== @ToString + @EqualsAndHashCode + @Getter + @Setter
@Embeddable
public class Address {

    @NotNull
    private String city;

    @NotNull
    private String street;

    @NotNull
    @Positive
    private int streetNumber;

    @Positive
    private int flatNumber;
}
