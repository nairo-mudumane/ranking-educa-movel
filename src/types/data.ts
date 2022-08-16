import { ReactNode } from "react";

export interface IChildren {
  children?: ReactNode;
}

export interface IData<T> {
  msg: string;
  error: boolean;
  data?: T;
}
