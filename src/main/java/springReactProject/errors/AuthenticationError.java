package springReactProject.errors;

import java.util.Map;

public class AuthenticationError extends HTTPError{

    public AuthenticationError(String message, Map<String, String> payload) {
        super(401, message, payload);
    }
}
