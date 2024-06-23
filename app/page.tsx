"use client";

import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports'; // Asegúrate de que la ruta es correcta
import { Authenticator, ThemeProvider, defaultTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import "./app.css";

Amplify.configure(awsconfig);

const theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      authenticator: {
        container: {
          // Estos estilos se pueden quitar, ya que se manejarán en el CSS
        },
      },
    },
  },
};

const MyComponent = () => {
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <div className="auth-container">
        <Authenticator>
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
      </div>
    </ThemeProvider>
  );
};

export default MyComponent;
