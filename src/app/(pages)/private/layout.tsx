'use client'
import { useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { isLoginUser } from "../API/user";
import Header from "@/app/components/Header/Header";
import "../../globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const isExcludedRoute = ['/login', '/register', '/'].includes(pathname);

      useEffect(() => {
        const fetchUser = async () => {
          if (!isExcludedRoute) {
            return;
          } else {
         const isLogin = await isLoginUser();
        if (!isLogin) {
        await router.push('/');
        }     
       }
    
    };
        fetchUser();
    
      }, []);  

  return (
    <>
      <Header />
        {children}
    </>
  )      
     
}
