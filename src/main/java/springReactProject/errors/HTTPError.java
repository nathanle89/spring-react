package springReactProject.errors;

import java.util.Map;

public class HTTPError {

    private int statusCode;
    private String message;
    private Map<String, String> payload;

    public HTTPError(int statusCode, String message, Map<String, String> payload) {
        this.statusCode = statusCode;
        this.message = message;
        this.payload = payload;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public Map<String, String> getPayload() {
        return payload;
    }

    public void setPayload(Map<String, String> fields) {
        this.payload = fields;
    }
}
