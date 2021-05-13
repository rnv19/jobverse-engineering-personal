import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import React from "react";

class Landing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={this.renderHTML} />
                </div>
            </Router>
        );
    }
    renderHTML = () => {
        return (
            <div>
                <div class="maincard landing-page-main-card">
                    <div class="main-card-body">
                        <h3 class="card-title">Welcome to Jobverz</h3>
                        <p class="card-text">
                            <strong>Select your role to proceed!</strong>
                        </p>
                        <br />
                        <div class="row landing-page-row mx-2">
                            <div class="col landing-col my-2">
                                <div class="card">
                                    <div class="card-body landing-page-card-body">
                                        <h5 class="card-title landing-page-card-title">
                                            Individual
                                        </h5>
                                        <p class="card-text landing-page-card-text">
                                            Supporting text below regarding
                                            Individuals and additional content.
                                        </p>
                                        <br />
                                        <button class="btn btn-primary btn-lg landing-page-proceed-btn">
                                            Proceed
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col landing-col my-2">
                                <div class="card">
                                    <div class="card-body landing-page-card-body">
                                        <h5 class="card-title landing-page-card-title">
                                            Government
                                        </h5>
                                        <p class="card-text landing-page-card-text">
                                            Supporting text below regarding
                                            Government and additional content.
                                        </p>
                                        <br />
                                        <button class="btn btn-primary btn-lg landing-page-proceed-btn">
                                            Proceed
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col landing-col my-2">
                                <div class="card">
                                    <div class="card-body landing-page-card-body">
                                        <h5 class="card-title landing-page-card-title">
                                            Company
                                        </h5>
                                        <p class="card-text landing-page-card-text">
                                            Supporting text below regarding
                                            Companies and additional content.
                                        </p>
                                        <br />
                                        <button class="btn btn-primary btn-lg  landing-page-proceed-btn">
                                            Proceed
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Landing;
