import React, { Component } from 'react';
import { ProjectItem, CreateProjectButton } from '../project';
import { connect } from "react-redux";
import { getProjectsAction } from "../../actions/projectActions";
import PropTypes from "prop-types";
import _ from 'lodash';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.props.getProjectsAction();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({projects: nextProps.projects.projects})
    }

    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container">
                                <h1 className="display-4 text-center">Projects</h1>
                                <CreateProjectButton />
                            </div>
                            <br/>
                            {
                                _.map(this.state.projects, (project, index) => {
                                    return <ProjectItem key={index} project={project}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    projects: PropTypes.object.isRequired,
    getProjectsAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps, { getProjectsAction })(Dashboard);