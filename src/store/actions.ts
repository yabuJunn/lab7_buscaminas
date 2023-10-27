import { Action, Actions } from "../types/store";

export const changeSelected = (payload: string): Action => ({
  type: Actions.CHANGE_SELECTED,
  payload,
});

export const uploadMines = (payload: string): Action => ({
  type: Actions.UPLOAD_MINES,
  payload,
});

export const addOpened = (payload: string): Action => ({
  type: Actions.ADD_OPENED,
  payload,
})