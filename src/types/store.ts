export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: string;
}

export enum Actions {
  "CHANGE_SELECTED" = "CHANGE_SELECTED"
}

export interface AppState {
  started: boolean
  selected: string
}
