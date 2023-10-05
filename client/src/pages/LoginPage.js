import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';
import Button from '../components/common/Button';

const LoginPage = () => {
    return (
        <div>
            <AuthTemplate>
                <AuthForm />
            </AuthTemplate>
        </div>
    );
};

export default LoginPage;