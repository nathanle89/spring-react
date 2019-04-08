import axios from "axios";
import { GET_ERRORS } from "./types";

export const createProjectAction = (project, history) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/api/projects", project);
            history.push('/');
        } catch (err) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    }
};
