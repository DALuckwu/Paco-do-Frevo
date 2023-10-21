import { createContext, useReducer } from "react";
import { FormAction, FormContextProps, FormProviderProps, InicialValuesProps } from "./types";

/** Criação do contexto do formulário para cadastrar agremiação */
export const FormContext = createContext<FormContextProps>({} as FormContextProps);

/** Criação do parâmetro para o reducer */
const createReducer = (state: InicialValuesProps, action: FormAction) => {
  switch (action.type) {
    case "updateBasicInfo":
      return { ...state, Name: action.value };
    case "updateLegalInfo":
      return { ...state, Address: action.value };
    case "updateComponents":
      return { ...state, Component: action.value };
    case "updateHistory":
      return { ...state, History: action.value };
    default:
      return state;
  }
};

export const FormContextProvider: React.FC <FormProviderProps> = ({children}) => {
    /** Valores iniciais do formulário de cadastro de um agremiação */
    const initialValues: InicialValuesProps = {
        Name: '',
        Type: 0,
        OtherType: '',
        Colors: '',
        FoundationDate: '',
        ActiveMembers: 0,
        President: '',
        Contacts: [
            {
                Type: 0,
                Value: ''
            },
        ],
        Adress: {
            Cep: 0,
            Street: '',
            Number: 0,
            Complement: '',
            Neighborhood: '',
            City: '',
            State: ''
        },
        IsOficialLocation: false,
        IsEventLocation: false,
        EventOutsideCarnival: false,
        IsLocationResidence: false,
        HasCnpj: true,
        Cnpj: 0,
        HasInvoice: true,
        Income: '',
        Component: [
            {
                Name: '',
                Function: '',
                Time: 0,
                LivesOfFrevo: false
            }
        ],
        History: ''
    }
    
    /** Informações básicas do formulário */
    const basicInfo = { ...initialValues, Contacts: [] };
    /** Informações jurídicas do formulário */
    const legalInfo = { ...initialValues, Address: {}, Income: '' };
    /** Componentes da agremiação */
    const components = { ...initialValues, Component: [] };
    /** História da agremiação */
    const history = { ...initialValues, History: '' };

    /** Criação do reducer para a etapa de Informações básicas */
    const [stateBasicInfo, dispatchBasicInfo] = useReducer(createReducer, basicInfo);
    /** Criação do reducer para a etapa de Informações jurídicas */
    const [stateLegalInfo, dispatchLegalInfo] = useReducer(createReducer, legalInfo);
    /** Criação do reducer para a etapa de compoenntes */
    const [stateComponents, dispatchComponents] = useReducer(createReducer, components);
    /** Criação do reducer para a etapa de história */
    const [stateHistory, dispatchHistory] = useReducer(createReducer, history);


    return (
        <FormContext.Provider value={{
            stateBasicInfo,
            stateLegalInfo,
            stateComponents,
            stateHistory,
            dispatchBasicInfo,
            dispatchLegalInfo,
            dispatchComponents,
            dispatchHistory,
        }}>
            {children}
        </FormContext.Provider>
    )
}