'use client';
import RegisterInputs from "@/app/UI/Inputs/RegisterInput";
import { title } from "process";
import { useState } from "react";
export default function RegisterForm() {
    const formPassword = /^(?=.*[a-zA-Z])(?=.*[*!#&])[A-Za-z0-9*!#&]{6,}$/;
    const formEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const formPhone = /^\+380\d{9}$/;

    const [isEmptyPassword, setIsEmptyPassword] = useState(false);
    const [isEmptyName, setIsEmptyName] = useState(false);
    const [isEmptyEmail, setIsEmptyEmail] = useState(false)
    const [isEmptyRepeatPassword, setIsEmptyRepeatPassword] = useState(false);
    const [isEmptyPhone, setIsEmptyPhone] = useState(false);

    const [password, setPassword] = useState('');
    const [name, srtName] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {name, value,} = e.currentTarget;
        switch (name) {
           
            case 'name':
            srtName(value);
            break;

           case 'email':
            setEmail(value);
            break;
            case 'password':
                setPassword(value);
            break;
             
            case 'repeatPassword':
            setRepeatPassword(value);
            break;
            
             case 'phone':
            setPhone(value);
            break;
        
           default:
           return;  
        } 
        
    } 

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if (password === '' || password.length < 6 || !formPassword.test(password)
       ) {  
           setIsEmptyPassword(true);
           return;
       }

       if (name === '') {
           setIsEmptyName(true);
           return;
       }

       if (email === '' || !formEmail.test(email)) {
           setIsEmptyEmail(true);
           return;
       }

       if (repeatPassword !== password) {
           setIsEmptyRepeatPassword(true);
           return;
       }

       if (phone === '' || !formPhone.test(phone)) {
           setIsEmptyPhone(true);
           return;
       }
       
};

    return (
        <form onSubmit={handleSubmit} >

            <RegisterInputs title = 'Імʼя*' name = 'name' type = 'text' placeholder = 'Іван' 
                message='Поле не може залишатись постим.'
                value={name} isError={isEmptyName} change={handleChange} />
            
            <RegisterInputs title = 'E-mail*' name = 'email' type = 'email' placeholder = 'email@org.ua' 
                message='Потрібно ввести E-mail у наступному форматі: email@org.ua.'
                value={email} isError={isEmptyEmail} change={handleChange} />

            <RegisterInputs title = 'Пароль*' name = 'password' type = 'password' placeholder = 'Very#5' 
                message='Пароль має містити щонайменше 6 символів, включаючи літери та спеціальні знаки (, #, & тощо)'
                value={password} isError={isEmptyPassword} change={handleChange} />
            
             <RegisterInputs title = 'Повторіть пароль*' name = 'repeatPassword' type = 'password' placeholder = 'Very#5' 
                message='Потрібно ввести одинакові паролі'
                value={repeatPassword} isError={isEmptyRepeatPassword} change={handleChange} />
            
            <RegisterInputs title = 'Введіть номер телефону*' name = 'phone' type = 'phone' placeholder = '+380670000000' 
                message='Потрібно ввести телефон у наступному форматі: +380670000000'
                value={phone} isError={isEmptyPhone} change={handleChange} />
            
            <button type="submit">Зареєструватися</button>
        </form>
    )
}