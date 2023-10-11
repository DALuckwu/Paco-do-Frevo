import { createContext, useReducer } from "react";
import { FormContextProps } from "./types";

/** Criação do contexto do formulário para cadastrar agremiação */
export const FormContext = createContext<FormContextProps>({} as FormContextProps);

export const FormContextProvider = ({children}) => {

    return (
        <FormContext.Provider value>
            {children}
        </FormContext.Provider>
    )
}