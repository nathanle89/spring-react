package springReactProject.errors;

import java.util.Map;

public class BadRequestError extends HTTPError {

    public BadRequestError(String message, Map<String, String> payload) {
        super(400, message, payload);
    }
}
