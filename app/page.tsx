"use client";

import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports'; // Asegúrate de que la ruta es correcta
import { Authenticator, AuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import "./app.css";

Amplify.configure(awsconfig);

const formFields: AuthenticatorProps['formFields'] = {
  signUp: {
    email: {
      placeholder: 'Enter your email',
      isRequired: true,
    }
  },
};

const MyComponent = () => {
  return (
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (
        <main>
          {user ? (
            <>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </main>
      )}
    </Authenticator>
  );
};

export default MyComponent;
