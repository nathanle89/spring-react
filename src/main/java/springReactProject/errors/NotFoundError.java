package springReactProject.errors;

import java.util.Map;

public class NotFoundError extends HTTPError{

    public NotFoundError(String message, Map<String, String> payload) {
        super(404, message, payload);
    }
}
