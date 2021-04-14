import { createContext, useEffect, useState } from 'react';
import { isExpired } from 'react-jwt';

export const SecretContext = createContext();

export const SecretProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        const isMyTokenExpired = isExpired(userData?.token);
        setLoggedIn(!isMyTokenExpired);
        if (!isMyTokenExpired) {
            setUser(userData);
        }
    }, []);
    // useEffect(() => {
    //     const { token } = user;
    //     const isMyTokenExpired = isExpired(token);
    //     setLoggedIn(!isMyTokenExpired);
    // }, [user]);
    const contextData = {
        user,
        setUser,
        isLoggedIn,
        setLoggedIn,
    };
    return <SecretContext.Provider value={contextData}>{children}</SecretContext.Provider>;
};
