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
      <img src="/Engine.jpg" alt="Descripción de la imagen" className="form-image" />
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
                <div className="auth-form">
                  {/* Aquí se renderiza el formulario de autenticación automáticamente */}
                </div>
              )}
            </main>
          )}
        </Authenticator>
      </div>
    </ThemeProvider>
  );
};

export default MyComponent;
