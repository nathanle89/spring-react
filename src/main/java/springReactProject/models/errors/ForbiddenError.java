package springReactProject.models.errors;

public class ForbiddenError extends HTTPError{

    public ForbiddenError(String message) {
        super(403, message);
    }
}
