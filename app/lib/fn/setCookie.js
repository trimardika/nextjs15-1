'use server'

import { cookies } from 'next/headers'

export async function setCookie({ stateName, stateData }) {

  const cookieStore = await cookies()

  cookieStore.set({
    name: stateName,
    value: stateData,
    httpOnly: true,
    // path: '/',
    // secure: true
  })

  // cookieStore.set({
  //   name: 'cookie_can_see_name',
  //   value: 'cookie_can_see_val',
  //   httpOnly: true,
  //   path: '/',
  // })
}