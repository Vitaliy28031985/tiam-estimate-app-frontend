'use client';
import { ExclamationCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { InputProps } from "@/app/interfaces/inputInterface";
import { useState } from 'react';

export default function RegisterInputs({ title, name, type, placeholder, message,
    value, isError = false, change }: InputProps) {
    
    const [showPassword, setShowPassword] = useState("password")
    const changeTypePassword = () => {
      if(showPassword === "password") {
        setShowPassword("text");
      } else {
        setShowPassword("password");
      }
    }
    
    return (
        <div className='mb-2'>

            <div className='relative'>
            <label className="inline-block text-bas text-black font-normal mb-3" htmlFor={name}>{ title}</label> 
            <input className={isError ? `
            w-[453px] h-[49px] px-4 py-3 rounded-3xl border
             border-red-0 justify-start items-center inline-flex mb-3
             text-red-0 text-sm font-normal  focus:border-blue-20 focus:outline-none
            ` :
            `w-[453px] h-[49px] px-4 py-3 rounded-3xl border
             border-gray-15 justify-start items-center inline-flex mb-3
             text-gray-20 text-sm font-normal focus:border-blue-20 focus:outline-none `} 
                type={type === "password" ? showPassword : type } name={name} id={name} value={value} placeholder={placeholder} onChange={change} />
                {type === "password" && (
                <button onClick={changeTypePassword} type="button" className='absolute top-12 right-5'>
                        {showPassword === "password" ? (
                        <EyeIcon className={isError ? `size-6 text-red-0` : `size-6 text-blue-20`} />
                        ) : (
                           <EyeSlashIcon className={isError ? `size-6 text-red-0` : `size-6 text-blue-20`} />     
                        )}
                        
                        
                </button>
            )}
                
           </div>
            
            <div className='flex items-center'>
            <ExclamationCircleIcon className={ isError ? `size-8 text-red-0 mr-3` : `size-8 text-gray-20 mr-3`} />
            <p
                className={ 
                    isError ? `text-red-0 text-xs font-normal ` : `text-gray-20 text-xs font-normal`
                }
                >{message}</p>
            </div>
        </div>
)
}

