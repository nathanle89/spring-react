package springReactProject.errors;

import java.util.Map;

public class ForbiddenError extends HTTPError{

    public ForbiddenError(String message, Map<String, String> payload) {
        super(403, message, payload);
    }
}
