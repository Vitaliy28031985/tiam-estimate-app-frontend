'use client';
import RegisterInputs from "@/app/UI/Inputs/RegisterInput";
import { title } from "process";
import { useEffect, useState } from "react";
export default function RegisterForm() {
    const formPassword = /^(?=.*[a-zA-Z])(?=.*[*!#&])[A-Za-z0-9*!#&]{6,}$/
    const [isEmptyPassword, setIsEmptyPassword] = useState(false);

    const [password, setPassword] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {name, value,} = e.currentTarget;
        switch (name) {
          
        //    case 'email':
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

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if (password === '' || password.length < 6 || !formPassword.test(password)) {
           
           setIsEmptyPassword(true);
           return;
       }
       
};

    return (
        <form onSubmit={handleSubmit} >

            <RegisterInputs title = 'Пароль' name = 'password' type = 'password' placeholder = 'Very#5' 
                message='Пароль має містити щонайменше 6 символів, включаючи літери та спеціальні знаки (, #, & тощо)'
                value={password} isError={isEmptyPassword} change={handleChange} />
            
            <button type="submit">Зареєструватися</button>
        </form>
    )
}