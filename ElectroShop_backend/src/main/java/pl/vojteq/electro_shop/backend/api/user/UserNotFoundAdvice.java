package pl.vojteq.electro_shop.backend.api.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class UserNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String userNotFoundHandler(UserNotFoundException exception) {
        return exception.getMessage();
    }
}
