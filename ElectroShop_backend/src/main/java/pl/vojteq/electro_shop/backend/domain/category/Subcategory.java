package pl.vojteq.electro_shop.backend.domain.category;

import lombok.*;
import pl.vojteq.electro_shop.backend.domain.product.Product;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "SUBCATEGORY")
public class Subcategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotNull
    @NotEmpty
    private String name;

    @OneToOne
    private Category category;

    @OneToMany
    private List<Product> product;
}
