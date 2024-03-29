import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp'
import { PasswordForgotLink } from '../PasswordForget'
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignInPage = () => (
    <div>
        <h1>Sign In</h1>
        <SignInForm />
        <SignUpLink />
        <PasswordForgotLink />
    </div>
);

const INITAIL_STATE = {
    email: '',
    password: '',
    error: null,
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITAIL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITAIL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error })
            })

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid = 
            password === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">Sign In</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}


const SignInForm = withRouter(withFirebase(SignInFormBase))

export default SignInPage;

export { SignInForm };