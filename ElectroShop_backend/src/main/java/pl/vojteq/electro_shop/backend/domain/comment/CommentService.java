package pl.vojteq.electro_shop.backend.domain.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    public List<Comment> findByProductId(UUID productId) {
        return commentRepository.findAllByProductId(productId);
    }

    public Comment createOrUpdateComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public void removeComment(UUID id) {
        commentRepository.deleteById(id);
    }
}
