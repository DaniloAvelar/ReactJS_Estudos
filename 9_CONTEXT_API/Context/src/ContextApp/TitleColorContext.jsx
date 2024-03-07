// import { type } from "os";
import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
   switch(action.type){
    case "RED":
        return{ ...state, color:"red" };
    case "BLUE":
        return{ ...state, color:"blue" };
    default:
        return state;
   }
};

//Criando o Provider
export const TitleColorContextProvider = ({children}) => {
    //dispatch passa quem altera e o estado inicial do estado
    //Nesse cado quem altera é o titleColorReducer(nome que quiser)
    //Valor inicial é = color: Purple
    const [state, dispatch] = useReducer(titleColorReducer,{color:"purple"});

    /*
    Quando utilizar o reducer, ao passar o Provider é obrigatorio passar tb o STATE, ou seja, passar a alteração para frente, 
    assim, quando o componente receber esse comppnente aqui, ele ja estará com a propriedade do estado alterada passada
    podendo assim ser utilizada onde for necessário
    
    EX: = value (abaixo)
    */
    return<TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
};
