export interface ITheme {
  currentTheme: string | undefined | null;
  cursorType?: boolean;
  cursorStyles?: string[];
}

export interface IAction {
  type?: string;
  theme?: string;
  cursorType?: boolean;
  dispatch?: React.Dispatch<IAction>;
}

export interface IMouseMove {
  event?: React.MouseEventHandler<HTMLDivElement>;
  pageX?: number;
  pageY?: number;
}

export interface IMousePosition {
  x: number | undefined;
  y: number | undefined;
}
