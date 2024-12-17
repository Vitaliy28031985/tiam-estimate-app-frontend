import axios from 'axios';
import BASE_URL from './base';
import { User } from '@/app/interfaces/user';

export async function getCurrentUser(): Promise<User | null> {
  const token = localStorage.getItem('token');

  
  if (!token) {
    // console.error('Token not found in localStorage');
    return null;
  }

  try {
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}api/user/current`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

 
    const userData: User = response.data;

    
    return userData;
  } catch (error) {
    console.error('Error during request:', error);
    return null;
  }
}
