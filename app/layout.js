import React from 'react';
import { mantineHtmlProps, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

import ThemeProvider from './components/themeOptions/ThemeProvider';
import { AuthProvider } from "./lib/context/auth/AuthContext";

export const metadata = {
  title: "DAYS",
  description: "DAYS TRAVEL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>

      <head>
        <ColorSchemeScript
        // defaultColorScheme='auto'
        />
      </head>

      <body>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
