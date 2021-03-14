export interface ITheme {
  currentTheme: string | undefined | null;
  cursorType?: boolean;
  cursorStyles?: ['pointer', 'hover'];
}

export interface IAction {
  type?: string;
  theme?: string;
  cursorType?: boolean;
  dispatch?: React.Dispatch<IAction>;
}
