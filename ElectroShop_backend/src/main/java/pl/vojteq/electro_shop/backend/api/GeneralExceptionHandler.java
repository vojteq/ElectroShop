package pl.vojteq.electro_shop.backend.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import pl.vojteq.electro_shop.backend.common.exception.NotFoundException;

@ControllerAdvice(basePackages = {"pl.vojteq.electro_shop.backend.api"})
public class GeneralExceptionHandler {

    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity<Object> handleNotFoundException(NotFoundException notFoundException, WebRequest webRequest) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(notFoundException.getMessage());
    }
}
