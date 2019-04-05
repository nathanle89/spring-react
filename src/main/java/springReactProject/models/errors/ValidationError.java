package springReactProject.models.errors;

import springReactProject.models.errors.HTTPError;

public class ValidationError extends HTTPError {

    public ValidationError(String message) {
        super(412, message);
    }
}
