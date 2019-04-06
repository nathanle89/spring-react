package springReactProject.errors;

public class ValidationError extends HTTPError {

    public ValidationError(String message) {
        super(412, message);
    }
}
