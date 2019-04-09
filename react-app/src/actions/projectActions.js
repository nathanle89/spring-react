import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "./types";

const createProjectAction = (project, history) => {
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

const getProjectsAction = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/projects');
        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        })
    }
};

const getProjectByIdentifier = (identifier) => {
    return async (dispatch) => {
        const res = await axios.get(`/api/projects/${identifier}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })
    };
};

export {
    createProjectAction,
    getProjectsAction,
    getProjectByIdentifier
}