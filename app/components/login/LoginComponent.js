'use client'

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { TextInput, PasswordInput, Button, Text, Container, Grid, Paper, Title } from '@mantine/core';
import { utils } from "../../lib/var/globalVar";
import { useAuth } from "../../lib/context/auth/AuthContext";
import { setCookie } from "../../lib/fn/setCookie";
import classes from './LoginComponent.module.css';

const LoginComponent = () => {

  const router = useRouter();
  const { fnAuthUser } = useAuth();

  const [data, setData] = React.useState({
    username: 'owner1',
    password: '123',
    loadingLogin: false,
    loadingCheckAuth: true,
  })

  React.useEffect(() => {
    const cookies = document.cookie;
    console.log('hai', cookies);
  }, [])

  const handleLogin = () => {
    setData(d => ({ ...d, loadingLogin: true }));

    const formDT = new FormData();
    const formDTHeader = { 'Content-Type': 'application/json' }

    formDT.append('username', data.username);
    formDT.append('password', data.password);

    axios({
      method: 'post',
      url: `http://${utils.dev.ip}/days/auth/authentication_signin`,
      data: formDT,
      headers: formDTHeader,
      withCredentials: true,
    }).then(response => {
      console.log('loggigg', response.data)

      // setData(d => ({ ...d, loadingLogin: false }));

      if (response.data.status === 'success') {
        // fnAuthUser(response.data.data);

        setCookie({ stateName: utils.cookieName.login, stateData: response.data.data }).then(res => {
          setData(d => ({ ...d, loadingLogin: false }));
          router.push('/dashboard/sub1');
        }).catch(err => {
          setData(d => ({ ...d, loadingLogin: false }));
          console.log('Failed to login. ', err.message)
        })
      }

      if (response.data.status === 'user-not-found') {
        console.log('user-not-found')
      }

      if (response.data.status === 'wrong-password') {
        console.log('wrong-password')
      }
    }).catch(error => {
      setData(d => ({ ...d, loadingLogin: false }));
      console.log('Login failed. Please try again. ' + error.message)
    })
  }

  return (
    <>
      <div
        className={classes.wrapperComp}
      >
        <div
          className={classes.imageComp}
        >
          <Image
            className={classes.imgSRC}
            src="/images/login-img-addon-1.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div
          className={classes.formComp}
        >
          <Title order={1} className={classes.title} ta="left" mt="md" mb={40}>
            Holla, <br />Welcome Back
          </Title>

          <TextInput
            mb='md'
            label="Username"
            value={data.username}
            onChange={(e) => setData(d => ({ ...d, username: e.target.value }))}
            required

            styles={(theme) => ({
              label: {
                marginBottom: theme.spacing.sm
              }
            })}
          />

          <PasswordInput
            label="Password"
            value={data.password}
            onChange={(e) => setData(d => ({ ...d, password: e.target.value }))}
            required

            styles={(theme) => ({
              label: {
                marginBottom: theme.spacing.sm
              }
            })}
          />

          <Text
            mt='sm'
            size='xs'
            c='dimmed'
            ta='right'
          >
            Forgot Password?
          </Text>

          <Button
            // fullWidth
            px='xl'
            color='violet'
            onClick={handleLogin}
            mt='lg'
            radius='md'
          >
            {data.loadingLogin ? 'Loading..' : 'Sign In'}
          </Button>
        </div>
      </div>
    </>
  )
}

export default LoginComponent;