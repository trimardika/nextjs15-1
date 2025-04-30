'use server'

import { cookies } from 'next/headers';
import { utils } from "../var/globalVar";

export async function delCookie() {
  (await cookies()).delete(utils.cookieName.login)
}