'use client'
import Image from 'next/image';
import Link from 'next/link';
import { getCurrentUser } from "@/app/(pages)/API/user";
import { User } from "@/app/interfaces/user";
import { useEffect, useState } from "react";
import logo from '../../assets/Logo-1.svg';
import ButtonBlueLink from '@/app/UI/Buttons/ButtonBlueLink';

export default function GuestHeader() {
    const [user, setUser] = useState<User | null>(null);
    
      
    useEffect(() => {
    const fetchUser = async () => {
        try { const userData = await getCurrentUser();
            setUser(userData);
        } 
        catch (error) {
              throw new Error('Token not found in localStorage');
     
        }
    };

    fetchUser();
      }, []);
    
    console.log(user);
    return (

    <header className='w-[1249px] ml-auto mr-auto container py-6'>
        <div className='flex gap-[861px]'>
            <Link href="/"><Image src={logo} alt="logo" width={164} height={50} quality={100} /></Link>
            <ButtonBlueLink title='Увійти' link='/login'/>
        </div>
    </header>
     
    )
}