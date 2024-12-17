'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { getCurrentUser } from "../API/user";
import Header from "@/app/components/Header/Header";
import "../../globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router = useRouter()
    
      
    useEffect(() => {
    const fetchUser = async () => {
        try {
            const userData = await getCurrentUser();
            if (!userData) {
             router.push('/');    
            }
        } 
        catch (error) {
              throw new Error('Token not found in localStorage');
     
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