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
      // defaultColorScheme={colorSchemeManager.get('light')}
      defaultColorScheme='light'
      // theme={colorSchemeManager.get('light')}

      theme={{
        activeClassName: '',
      }}
    >
      {children}
    </MantineProvider>
  )
}

export default ThemeProvider;