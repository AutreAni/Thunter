import { ADDLIST, DELETELIST } from "../constants/actionTypes"

export const addList = (text) => {
  return {
    type: ADDLIST,
     payload: {
    id:  Math.random(),
    text
  },
  }
}
export const deleteList = (id) => {
  return {
    type: DELETELIST,
     payload: id,
  }
}