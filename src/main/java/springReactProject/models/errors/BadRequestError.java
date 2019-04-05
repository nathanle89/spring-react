package springReactProject.models.errors;

public class BadRequestError extends HTTPError {

    public BadRequestError(String message) {
        super(400, message);
    }
}
