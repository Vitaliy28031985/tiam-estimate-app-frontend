'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { getCurrentUser } from "./(pages)/API/user";
import GuestHeader from "./components/Header/GuestHeader";
import "./globals.css";


// export const metadata: Metadata = {
//   title: "Estimate app",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPrivateRoute = pathname?.startsWith('/private');

 const router = useRouter()
    
      
    useEffect(() => {
    const fetchUser = async () => {
        try {
            const userData = await getCurrentUser();
            if (userData) {
             router.push('/private');    
            }
        } 
        catch (error) {
          console.error('Token not found in localStorage', error)
              throw new Error('Token not found in localStorage');
     
        }
    };
        fetchUser();
    
      }, []);

  return (
    <html lang="uk">
      <body>
        {!isPrivateRoute && <GuestHeader/>}
        
        {children}
      </body>
    </html>
  );
}
