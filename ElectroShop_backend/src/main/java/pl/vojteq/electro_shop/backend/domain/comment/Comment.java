package pl.vojteq.electro_shop.backend.domain.comment;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Getter
@Setter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "COMMENTS")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private UUID productId;

    private String author;

    private int rating;

    private String comment;

    private String date;

    public Comment(UUID productId, String author, int rating, String comment, String date) {
        this.productId = productId;
        this.author = author;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment1 = (Comment) o;
        return rating == comment1.rating &&
                Objects.equals(id, comment1.id) &&
                Objects.equals(productId, comment1.productId) &&
                author.equals(comment1.author) &&
                comment.equals(comment1.comment) &&
                date.equals(comment1.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productId, author, rating, comment, date);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", productId=" + productId +
                ", author='" + author + '\'' +
                ", rating=" + rating +
                ", comment='" + comment + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
