import { DELETE_PROJECT, GET_PROJECT, GET_PROJECTS } from "../actions/types";
import _ from 'lodash';

const initialState = {
    projects: [],
    project: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            };
        case DELETE_PROJECT:
            let updatedProject = state.projects.filter(project => action.payload != project.projectIdentifier );
            return {
                ...state,
                projects: updatedProject
            };
        default:
            return state;

    }
}