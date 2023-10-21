/** Values a serem transmitidos pelo contexto */
export interface FormContextProps {
    stateBasicInfo, 
    dispatchBasicInfo,
    stateLegalInfo, 
    dispatchLegalInfo,
    stateComponents, 
    dispatchComponents,
    stateHistory, 
    dispatchHistory
}

/** Propriedade do contexto */
export interface FormProviderProps {
  children?: ReactElement;
}

/** Tipagem dos valores a serem utilizados para cadastrar uma nova agremiação */
export interface InicialValuesProps {
  /** Nome da agremiação */
  Name?: string;
  /** Tipo de agremiação (1-Bloco, 2-Clube, 3-Clube de bonecos, 4-Troça, 5-Outros) */
  Type?: number;
  /** Caso o usuário tenha escolhido a opção 5 em tipo de agremiação */
  OtherType?: string;
  /** Cores da agremiação */
  Colors?: string;
  /** Data de fundação */
  FoundationDate?: string;
  /** Quantidade de membros ativos */
  ActiveMembers?: number;
  /** Presidente da agremiação */
  President?: string;
  /** Lista de contatos */
  Contacts?: {
      Type?: number;
      Value?: string;
    }[]
    /** Endereço da agremiação */
  Adress?: {
    Cep?: number;
    Street?: string;
    Number?: number;
    Complement?: string;
    Neighborhood?: string;
    City?: string;
    State?: string;
  };
  /** Indica se o endereço é a sede oficial */
  IsOficialLocation?: boolean;
  /** Indica se os eventos da agremiação são realizados no endereço  */
  IsEventLocation?: boolean;
  /** Indica se realiza eventos fora do carnaval */
  EventOutsideCarnival?: boolean;
  /** Indica se o endereço passado é a casa de alguém */
  IsLocationResidence?: boolean;
  /** Indica se possui CNPJ */
  HasCnpj?: boolean;
  /** CPNJ da agremiação, se houver */
  Cnpj?: number;
  /** Indica se é capaz de emitir notas fiscais */
  HasInvoice?: boolean;
  /** Fonte de renda da agremiação */
  Income?: string;
  /** Componentes da agremiação e suas funções */
  Component: [
    {
      Name?: string;
      Function?: string;
      Time?: number;
      LivesOfFrevo?: boolean;
    }
  ];
  /** Hitória da agremiação */
  History?: string;
}

/** Tipagem do dispatch do contexto */
export type FormAction = { type: string, value: any };