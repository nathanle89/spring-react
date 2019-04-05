package springReactProject.models.errors;

public class AuthenticationError extends HTTPError{

    public AuthenticationError(String message) {
        super(401, message);
    }
}
