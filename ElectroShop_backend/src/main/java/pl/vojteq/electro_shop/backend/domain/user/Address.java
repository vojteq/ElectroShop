package pl.vojteq.electro_shop.backend.domain.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data       //== @ToString + @EqualsAndHashCode + @Getter + @Setter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
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

    public Address(@NotNull String city, @NotNull String street, @NotNull @Positive int streetNumber) {
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
    }
}
