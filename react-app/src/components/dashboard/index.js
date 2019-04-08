import React, { Component } from 'react';
import { ProjectItem, CreateProjectButton } from '../project';

class Dashboard extends Component {
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
                            <ProjectItem />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;