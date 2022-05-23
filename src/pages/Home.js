import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';

export default function Home({
    user,
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className='flex flex-col items-center text-5xl font-bold text-center'>
            This is the home screen 
            {user}

            <button 
                onClick={signOutHandler}
                className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                
                Sign Out
            </button>
        </div>
    )
}