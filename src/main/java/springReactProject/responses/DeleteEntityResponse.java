package springReactProject.responses;

import org.springframework.http.HttpStatus;

public class DeleteEntityResponse {

    private String message;
    private int statusCode;

    public DeleteEntityResponse() {
        this.message = "Entity deleted";
        this.statusCode = HttpStatus.NO_CONTENT.value();
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
