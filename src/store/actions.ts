import { Action, Actions } from "../types/store";

export const changeSelected = (payload: string): Action => ({
  type: Actions.CHANGE_SELECTED,
  payload,
});
