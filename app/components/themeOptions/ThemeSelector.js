'use client'

import React from "react";
import { useMantineColorScheme, Button } from '@mantine/core';
import { localStorageColorSchemeManager } from "./localStorageColorSchemeManager.ts";

const ThemeSelector = () => {

  const colorSchemeManager = localStorageColorSchemeManager({
    key: 'my-color-scheme',
  });

  const { setColorScheme } = useMantineColorScheme();

  return (
    <>
      <Button
        onClick={() => {
          colorSchemeManager.set('dark');
          setColorScheme('dark');
        }}
      >
        Dark
      </Button>

      <Button
        onClick={() => {
          colorSchemeManager.set('light');
          setColorScheme('light');
        }}
      >
        Light
      </Button>
    </>
  );

}

export default ThemeSelector;