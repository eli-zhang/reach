import React from 'react';
import { Body, GoogleSignInButton, GlobalStyle } from './styled';
import { GoogleLogin } from '@react-oauth/google';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
  return (
    <>
        <GlobalStyle />
        <Body>
        <GoogleLogin
            clientId="369102416930-go89g0ls12g4tnfg89dtto97hv06i76n.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            size={"large"}
            width={250}
            cookiePolicy={'single_host_origin'}
        />
    </Body>
    </>
    
  );
};

export default GoogleSignIn;