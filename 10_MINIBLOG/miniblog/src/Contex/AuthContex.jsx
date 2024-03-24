import { useContext, createContext } from "react";

//Criando o contexto
const AuthContext = createContext();

//Exportando o Provider do contexto
export function AuthProvider({children, value}){
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//Retornando o contexto já utilizado
export function useAuthValue(){
    return useContext(AuthContext);
}