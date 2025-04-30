'use client';

import React from "react";
import { MantineProvider } from '@mantine/core';
import { localStorageColorSchemeManager } from "./localStorageColorSchemeManager.ts";

const ThemeProvider = ({ children }) => {

  const colorSchemeManager = localStorageColorSchemeManager({
    key: 'my-color-scheme',
  });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      // theme={{ colorScheme }}
      // colorSchemeManager={colorSchemeManager}
      defaultColorScheme='auto'
      theme={colorSchemeManager.get('light')}
    >
      {children}
    </MantineProvider>
  )
}

export default ThemeProvider;