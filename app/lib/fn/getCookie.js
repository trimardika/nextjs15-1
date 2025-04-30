import { cookies } from 'next/headers';
import { utils } from "../var/globalVar";

export default async function GetCookie() {
  const cookieStore = await cookies()
  const hasCookie = cookieStore.get(utils.cookieName.login);
  // const hasCookie = cookieStore.has('tes_kuki')
  return <div>{JSON.stringify(hasCookie ? hasCookie : 'takada')}</div>
}