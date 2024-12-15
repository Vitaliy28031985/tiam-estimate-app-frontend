'use client';
import RegisterInputs from "@/app/UI/Inputs/RegisterInput";
import { useState } from "react";
export default function RegisterForm() {
    const [password, setPassword] = useState('');
    const handleChange = (e: any) => {
       const {name, value,} = e.currentTarget;
        switch (name) {
          
           case 'email':
            // setEmail(value);
            // break;
            case 'password':
            setPassword(value);
            break;
            
            // case 'emailTwo':
            // setEmailTwo(value);
            // break;
            
            // case 'code':
            // setCode(value);
            // break;
            
            //  case 'newPassword':
            // SetNewPassword(value);
            // break;
        
           default:
           return;  
        } 
        
    } 
    return (
        <form >
            <RegisterInputs title='Пароль' name='passvord' type='text' placeholder='Very#5' value={password} change={() => handleChange}
                message='Пароль має містити щонайменше 6 символів, включаючи літери та спеціальні знаки (, #, & тощо)' />
        </form>
    )
}