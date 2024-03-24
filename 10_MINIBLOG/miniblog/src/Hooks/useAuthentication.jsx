import { db } from '../Firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';


export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);
    const auth = getAuth();

    function checkIsCancelled() {
        //Se for TRUE
        if (cancelled) {
            return;
        }
    }
    //Create User
    const createUser = async (data) => {

        checkIsCancelled()
        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)
            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha deve conter pelo menos 6 caraceteres."
            }
            else if (error.message.includes("email-already")){
                systemErrorMessage="E-mail já cadastrado."
            }
            else if(error.message.includes("invalid")){
                systemErrorMessage="E-mail inválido, favor corrija e tente novemante."
            }
            else{
                systemErrorMessage="Ocorreu um erro, por favor tente mais tarde."
            }
            setLoading(false)
            setError(systemErrorMessage);
        }
    };

    //Logout - Sign Out
    const logout = () => {
        checkIsCancelled();
        signOut(auth);
    };

    //Login - Sign In
    const login = async(data) => {

        //Checando o memoryLick
        checkIsCancelled();

        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } 
        catch (errors) {
            let systemErrorMessage;

            if(errors.message.includes("invalid")){
                systemErrorMessage = "Usuário e/ou senha incorreto(s)."
            }
            else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setError(systemErrorMessage);
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    };
};
