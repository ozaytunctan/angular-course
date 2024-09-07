import {Type} from "@angular/core";

export interface Widget {
  id: number;
  title?: string,
  description?: string,
  content: Type<unknown>,
  rows?: number;
  cols?: number;
  backgroundColor?: string;
  color?: string
}
