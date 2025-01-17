package pl.vojteq.electro_shop.backend.domain.product;

import lombok.*;
import org.hibernate.type.BlobType;
import org.springframework.context.annotation.Lazy;
import pl.vojteq.electro_shop.backend.domain.category.Category;
import pl.vojteq.electro_shop.backend.domain.category.Subcategory;
import pl.vojteq.electro_shop.backend.domain.comment.Comment;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
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

//    @NotNull
    private String name;

    @ManyToOne
    private Category category;

    @ManyToOne
    private Subcategory subcategory;

    private String description;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Comment> comments = new ArrayList<>();

    @Lob
    private byte[] picture;

    public Product(String name) {
        this.name = name;
    }

    public Product(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Product(String name, String description, byte[] picture) {
        this.name = name;
        this.description = description;
        this.picture = picture;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(id, product.id) &&
                name.equals(product.name) &&
                Objects.equals(subcategory, product.subcategory) &&
                Objects.equals(description, product.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, subcategory, description, comments);
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category=" + category +
                ", subcategory=" + subcategory +
                ", description='" + description + '\'' +
                ", comments=" + comments +
                '}';
    }
}
