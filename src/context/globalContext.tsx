import React, { createContext, useContext, useReducer } from 'react';

interface ITheme {
  currentTheme: string | null;
}

interface IAction {
  type: string;
  theme: string;
}

const initialState = {
  currentTheme: 'dark',
};

const GlobalStateContext = createContext<ITheme>(initialState);
const GlobalDispatchContext = createContext({});

const globalReducer = (state: ITheme, action: IAction): ITheme => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem('theme') === null
        ? 'dark'
        : window.localStorage.getItem('theme'),
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
