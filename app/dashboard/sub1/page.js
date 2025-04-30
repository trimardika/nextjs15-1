'use client'

import React from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { utils } from "../../lib/var/globalVar";
import { decodeJWT } from "../../lib/fn/globalFn";
import { useAuth } from "../../lib/context/auth/AuthContext";
import { delCookie } from "../../lib/fn/delCookie";

const SubPage1 = () => {

  const router = useRouter();
  const { authUser, fnAuthUser } = useAuth();

  const [data, setData] = React.useState({
    data: [],
    dataLoading: false,
  })

  React.useEffect(() => {
    const userId = decodeJWT(authUser, 'syswebapp', 'syswebappui');

    console.log('authUser', userId)
  }, [authUser])

  const handleGetData = () => {
    setData(d => ({ ...d, dataLoading: true }));

    const formDT = new FormData();
    // formDT.append('state_jwt', authUser?.syswebapp);

    axios({
      method: 'post',
      url: `${utils.dev.ip}/auth/test`,
      data: {},
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    }).then(response => {
      console.log('res', response.data)

      setData(d => ({ ...d, dataLoading: false }));

      if (response.data.status === 'success') {
        setData(d => ({ ...d, data: response.data.data }))
      }

      if (response.data.status === 'user-not-found') {
        fnAuthUser(null);
        delCookie();
        router.push('/');
      }
    }).catch(error => {
      setData(d => ({ ...d, dataLoading: false }));
      console.log('Failed. Please try again. ' + error.message)
    })
  }

  return (
    <>
      <div>SubPage1</div>

      <div>
        {data.data.map(item => <div key={item.user_id}>{item.user_id}</div>)}
      </div>

      <button
        onClick={handleGetData}
      >
        Get Data
      </button>
    </>
  )
}

export default SubPage1;