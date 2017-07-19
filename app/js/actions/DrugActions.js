export const ADD_DRUG = "ADD_DRUG"
export const SELECT_DRUG = "SELECT_DRUG"
export const DELETE_DRUG = "DELETE_DRUG"
export const TOGGLE_DRAW = "TOGGLE_DRAW"


export function addDrug(id, name, description, types, price) {
  return {
    type: ADD_DRUG,
    payload: { id, name, description, types, price },
  }
}

export function selectDrug(id, name, description, types, price) {
  return {
    type: SELECT_DRUG,
    payload: { id, name, description, types, price },
  }
}


export function deleteDrug(drugs = [], id) {
  return {
    type: DELETE_DRUG,
    payload: { drugs, id },
  }
}


export function toggleDraw(value) {
  return {
    type: TOGGLE_DRAW,
    payload: { value },
  }
}
