import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged,
    getAuth,
    GoogleAuthProvider
} from "firebase/auth";
import { AppFirebase } from "../config/firebase";
import { useEffect, useState } from "react";

export const UsersContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const auth = getAuth(AppFirebase);

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <UsersContext.Provider value={{ createUser, user, logout, signInUser }}>
            {children}
        </UsersContext.Provider>
    )
}
