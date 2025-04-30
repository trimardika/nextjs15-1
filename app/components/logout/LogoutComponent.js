'use client';

import React from "react";
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';

import { useAuth } from "../../lib/context/auth/AuthContext";
import { delCookie } from "../../lib/fn/delCookie";

const LogoutComponent = () => {

  const router = useRouter();
  const { fnAuthUser } = useAuth();

  const handleLogout = () => {
    fnAuthUser(null);
    delCookie();
    router.push('/');
  }

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default LogoutComponent;