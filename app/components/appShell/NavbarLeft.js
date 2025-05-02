'use client'

import React from "react";
import { Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import ThemeSelector from "../themeOptions/ThemeSelector";
import LogoutComponent from "../../components/logout/LogoutComponent";

const NavbarLeft = ({ fnCloseNavbarLeft }) => {

  const theme = useMantineTheme();
  const mobileThreshold = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <>
      <Box mb='sm'>
        <Link href="/dashboard/sub1" onClick={() => mobileThreshold ? fnCloseNavbarLeft() : null}>Sub 1</Link>
      </Box>

      <Box mb='sm'>
        <Link href="/dashboard/sub2" onClick={() => mobileThreshold ? fnCloseNavbarLeft() : null}>Sub 2</Link>
      </Box>

      <Box mb='xl'>
        <Link href="/dashboard/sub3" onClick={() => mobileThreshold ? fnCloseNavbarLeft() : null}>Sub 3</Link>
      </Box>

      <Box mb='xl'>
        <ThemeSelector />
      </Box>

      <Box mb='xl'>
        <LogoutComponent />
      </Box>
    </>
  )
}

export default NavbarLeft;