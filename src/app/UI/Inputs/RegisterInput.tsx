'use client';
import { InputProps } from "@/app/interfaces/inputInterface";

export default function RegisterInputs({ title, name, type, placeholder, message,
    value, isError = false, showButton = false, change }: InputProps) {
    return (
        <div>
            <label className="text-bas text-black font-normal mb-3" htmlFor={name}>{title}</label> <br/>
            <input className="w-[453px] h-[49px] px-4 py-3 rounded-3xl border
             border-gray-15 justify-start items-center inline-flex mb-3
             text-gray-20 text-sm font-normal"
                onChange={change}
                type={type} name={name} id={name} value={value} placeholder={placeholder} />
            <p
                className={ 
                    isError ? `text-red-0 text-xs font-normal ` : `text-gray-20 text-xs font-normal`
                }
            >{message}</p>
        </div>
)
}