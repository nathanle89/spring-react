package springReactProject.errors;

public class NotFoundError extends HTTPError{

    public NotFoundError(String message) {
        super(404, message);
    }
}
