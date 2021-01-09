package pl.vojteq.electro_shop.backend.domain.product;

import lombok.*;
import pl.vojteq.electro_shop.backend.domain.category.Category;
import pl.vojteq.electro_shop.backend.domain.category.Subcategory;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "PRODUCTS")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotNull
    private String name;

    @ManyToOne
    private Subcategory subcategory;

    private String description;
}
