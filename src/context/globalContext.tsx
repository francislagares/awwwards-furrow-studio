/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { createContext, useContext, useReducer } from 'react';
import { ITheme, IAction } from '../interfaces';

const initialState = {
  currentTheme: 'dark',
  cursorType: false,
  cursorStyles: ['pointer', 'hover', 'locked'],
};

const GlobalStateContext = createContext<ITheme>(initialState);
// @ts-ignore
const GlobalDispatchContext = createContext();

const globalReducer = (state: ITheme, action: IAction): ITheme => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }

    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType,
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
    cursorType: false,
    cursorStyles: ['pointer', 'hover', 'locked'],
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
