import { useContext } from "react";
import { CounterContext } from "../ContextApp/CounterContext";

export const useCounterContext = () => {
    //chamando o CounterContext do React
    const context = useContext(CounterContext);

    if(!context){
        console.log("Contexto não encontrado");
    }

    return context;
};