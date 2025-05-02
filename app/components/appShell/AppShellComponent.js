'use client'

import React from "react";
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavbarLeft from "../appShell/NavbarLeft";

const AppShellComponent = ({ children }) => {

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <div>Company Name</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavbarLeft
          fnCloseNavbarLeft={() => toggleMobile(false)}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <button
          onClick={() => {
            toggleDesktop(false)
          }}
        >
          Close desktop
        </button>

        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default AppShellComponent;