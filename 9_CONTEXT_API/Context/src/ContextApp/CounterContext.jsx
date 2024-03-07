import {createContext, useState} from 'react';

export const CounterContext = createContext();

//Criando Provider
export const CounterContextProvider = ({ children }) =>{
    //Aqui é o que será compartilhado com outros contextos
    const [counter, setCounter] = useState(5);

    return(
        //Aqui eu estou passando o Contexto junto com os valores que eu quero que sejam utilizados (VALUE)
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}
