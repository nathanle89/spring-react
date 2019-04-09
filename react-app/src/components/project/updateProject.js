import React, { Component } from "react";
import PropTypes from 'prop-types'; // React type checking lib
import { connect } from 'react-redux';
import AddProject from "./addProject";
import _ from "lodash";
import { getProjectByIdentifier } from '../../actions/projectActions';

class UpdateProject extends Component {

    constructor() {
        super();

        this.state = {
            project: {}
        }
    }

    componentDidMount() {
        this.props.getProjectByIdentifier(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        debugger
        this.setState({ project: nextProps.project })
    }

    render() {
        if (_.isEmpty(this.state.project)) {
            return <div>Loading</div>
        }

        return (
            <AddProject project={this.state.project}/>
        )
    }
}

const mapStateToProps = state => ({
    project: state.projects.project
});



export default connect(mapStateToProps, { getProjectByIdentifier })(UpdateProject);