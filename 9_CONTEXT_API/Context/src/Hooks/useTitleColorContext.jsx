import { useContext } from "react";
import { TitleColorContext } from "../ContextApp/TitleColorContext";

export const useTitleColorContext = () =>{
    //Chamando o contexto
    const context = useContext(TitleColorContext);

    if(!context){
        console.log("Contexto nao encontrado")
    }

    return context
};