import React from "react";
// import { useRouter } from 'next/navigation';
// import { decodeJWT } from "../lib/fn/globalFn";
// import { useAuth } from "../lib/context/auth/AuthContext";
import AppShellComponent from '../components/appShell/AppShellComponent';

const DashboardLayout = ({ children }) => {

  // const router = useRouter();
  // const { authUser } = useAuth();

  // const userRole = decodeJWT(authUser, 'syswebapp', 'syswebappsl');

  // const [data, setData] = React.useState({
  //   isLoading: true
  // })

  // React.useEffect(() => {
  //   if (!authUser) {
  //     router.push('/');
  //     return;
  //   }

  //   setData(d => ({ ...d, isLoading: false }))
  // }, [authUser, userRole])

  // if (data.isLoading) {
  //   return <div>Loading Dashboard Layout..</div>
  // }

  return (
    <AppShellComponent>
      {children}
    </AppShellComponent>
  )
}

export default DashboardLayout;