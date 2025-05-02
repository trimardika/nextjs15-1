'use client'

import React from "react";
import clsx from 'clsx';
import { useMantineColorScheme, useComputedColorScheme, Button } from '@mantine/core';
// import { localStorageColorSchemeManager } from "./localStorageColorSchemeManager.ts";
import classes from "./ThemeSelector.module.css";

const ThemeSelector = () => {

  // const colorSchemeManager = localStorageColorSchemeManager({
  //   key: 'my-color-scheme',
  // });

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <>
      <div
        className={clsx(classes.themeSelector, classes.light)}
        onClick={() => {
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        }}
      >
        Light
      </div>

      <div
        className={clsx(classes.themeSelector, classes.dark)}
        onClick={() => {
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        }}
      >
        Dark
      </div>

      {/* <Button
        lightHidden
        onClick={() => {
          colorSchemeManager.set('dark');
          setColorScheme('dark');
        }}
      >
        Dark
      </Button> */}

      {/* <Button
        onClick={() => {
          colorSchemeManager.set('light');
          setColorScheme('light');
        }}
      >
        Light
      </Button> */}
    </>
  );

}

export default ThemeSelector;