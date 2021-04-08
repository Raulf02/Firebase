import React from 'react'

import { PasswordForgotForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext,withAuthorization } from '../Session'

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
            <h1>Account Page: {authUser.email}</h1>
            <PasswordForgotForm />
            <PasswordChangeForm />
        </div>
        )}
    </AuthUserContext.Consumer>
    
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);