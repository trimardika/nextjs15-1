import React from 'react';
// import { useRouter } from 'next/navigation';
// import { decodeJWT } from "./lib/fn/globalFn";
// import { useAuth } from "./lib/context/auth/AuthContext";
import LoginComponent from "./components/login/LoginComponent";

const PageLogin = () => {

  // const router = useRouter();
  // const { authUser } = useAuth();

  // const [data, setData] = React.useState({
  //   isLoading: true
  // })

  // const userRole = decodeJWT(authUser, 'syswebapp', 'syswebappsl');

  // React.useEffect(() => {
  //   if (authUser && userRole === 'owner') {
  //     router.push('/dashboard/sub1');
  //     return;
  //   } else if (authUser && userRole === 'admin') {
  //     router.push('/dashboard/sub2');
  //     return;
  //   }

  //   setData(d => ({ ...d, isLoading: false }))
  // }, [authUser, userRole])

  // if (data.isLoading) {
  //   return <div>Loading Login..</div>
  // }

  return (
    <>
      <LoginComponent />
    </>
  )
}

export default PageLogin;