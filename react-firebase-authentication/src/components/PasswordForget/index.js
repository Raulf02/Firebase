import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgotPage = () => (
    <div>
        <h1>PasswordForgot</h1>
        <PasswordForgotForm />
    </div>
);

const INTIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgotFormBase extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INTIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.withFirebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INTIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return(
            <form onSubmit={this.onSubmit}>
                <input
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgotLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGOT}>Forgot Password?</Link>
    </p>
);

export default PasswordForgotPage;

const PasswordForgotForm = withFirebase(PasswordForgotFormBase);

export { PasswordForgotForm, PasswordForgotLink };

