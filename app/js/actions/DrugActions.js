
export const ADD_DRUG = 'ADD_DRUG';


export function addDrug(name, description, types, price) {
  return {
    type: ADD_DRUG,
    payload: { name, description, types, price },
  };
}
