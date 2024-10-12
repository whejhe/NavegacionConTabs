import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase';

export const logout = async (navigation) => {
    try {
        const auth = getAuth(app);
        await signOut(auth); 
        navigation.navigate('Login');
    } catch (error) {
        console.error('Error cerrando sesión: ', error);
    }
};