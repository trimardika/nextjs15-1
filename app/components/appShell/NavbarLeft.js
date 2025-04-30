'use client'

import React from "react";
import { Box } from '@mantine/core';
import Link from 'next/link';
import ThemeSelector from "../themeOptions/ThemeSelector";
import LogoutComponent from "../../components/logout/LogoutComponent";

const NavbarLeft = () => {

  return (
    <>
      <Box mb='sm'>
        <Link href="/dashboard/sub1">Sub 1</Link>
      </Box>

      <Box mb='sm'>
        <Link href="/dashboard/sub2">Sub 2</Link>
      </Box>

      <Box mb='xl'>
        <Link href="/dashboard/sub3">Sub 3</Link>
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