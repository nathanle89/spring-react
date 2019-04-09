import React, { Component } from "react";
import PropTypes from 'prop-types'; // React type checking lib
import { connect } from 'react-redux';
import { createProjectAction } from '../../actions/projectActions';

class AddProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectName: props.project ? props.project.projectName : "",
            projectIdentifier: props.project ? props.project.projectIdentifier : "",
            description: props.project ? props.project.description : "",
            startDate: props.project ? props.project.startDate : "",
            endDate: props.project ? props.project.endDate : "",
            errors: { payload: {}}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const newProject = {
            ...this.state
        };
        this.props.createProjectAction(newProject, this.props.history)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Project form</h5>
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className={`form-control form-control-lg ${errors.payload.projectName ? 'is-invalid' : ''}`}
                                           placeholder="Project Name" name="projectName"
                                           value={this.state.projectName}
                                           onChange={this.onChange}
                                    />
                                    {errors.payload.projectName && (<p className="invalid-feedback">{errors.payload.projectName}</p>)}
                                </div>
                                <div className="form-group">
                                    <input type="text" className={`form-control form-control-lg ${errors.payload.projectIdentifier ? 'is-invalid' : ''}`}
                                           placeholder="Unique Project ID"
                                           name="projectIdentifier"
                                           value={this.state.projectIdentifier}
                                           onChange={this.onChange}
                                           disabled={this.props.project !== undefined}
                                    />
                                    {errors.payload.projectIdentifier && (<p className="invalid-feedback">{errors.payload.projectIdentifier}</p>)}
                                </div>

                                <div className="form-group">
                                    <textarea className={`form-control form-control-lg ${errors.payload.description ? 'is-invalid' : ''}`}
                                              placeholder="Project Description"
                                              name="description"
                                              value={this.state.description}
                                              onChange={this.onChange}
                                    />
                                    {errors.payload.description && (<p className="invalid-feedback">{errors.payload.description}</p>)}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className="form-control form-control-lg"
                                           name="startDate"
                                           value={this.state.startDate}
                                           onChange={this.onChange}
                                    />

                                </div>
                                <h6>End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className="form-control form-control-lg"
                                           name="endDate"
                                           value={this.state.endDate}
                                           onChange={this.onChange}
                                    />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors
});

AddProject.propTypes = {
    createProjectAction: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { createProjectAction })(AddProject);