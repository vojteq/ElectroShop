package pl.vojteq.electro_shop.backend.domain.category;

import lombok.*;
import pl.vojteq.electro_shop.backend.domain.product.Product;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Objects;
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

//    @NotNull
//    @NotEmpty
    private String name;

    @OneToOne
    private Category category;

    @OneToMany
    private List<Product> product;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subcategory that = (Subcategory) o;
        return Objects.equals(id, that.id) &&
                name.equals(that.name) &&
                Objects.equals(category, that.category) &&
                Objects.equals(product, that.product);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, category, product);
    }

    @Override
    public String toString() {
        return "Subcategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category=" + category +
                ", product=" + product +
                '}';
    }
}
