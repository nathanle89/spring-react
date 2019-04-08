package springReactProject.errors;

import java.util.Map;

public class ValidationError extends HTTPError {

    public ValidationError(String message, Map<String, String> payload) {
        super(412, message, payload);
    }
}
