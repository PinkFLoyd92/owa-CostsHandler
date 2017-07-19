import { ADD_DRUG, SELECT_DRUG } from '../actions/DrugActions';

const drug = (state = {}, action) => {
  switch (action.type) {
    case ADD_DRUG:
      return {
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        types: action.payload.types,
        price: action.payload.price,
      };
    default:
      return state;
  }
};

function drugs(state = [], action) {
  switch (action.type) {
    case ADD_DRUG:
      return [...state, drug(undefined, action)];
    default:
      return state;
  }
}


function selectDrug(state = {}, action) {
  switch (action.type) {
    case SELECT_DRUG:
      return Object.assign({}, state, {
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        types: action.payload.types,
        price: action.payload.price,
      });

    default:
      return state;
  }
}

export { selectDrug, drugs };
