import { ADD_DRUG } from '../actions/DrugActions';

const drug = (state = {}, action) => {
  switch (action.type) {
    case ADD_DRUG:
      return {
        name: action.payload.name,
        description: action.payload.description,
        types: action.payload.types,
        price: action.payload.price,
      };
    default:
      return state;
  }
};

export default function drugs(state = [], action) {
  switch (action.type) {
    case ADD_DRUG:
      return [...state, drug(undefined, action)];
    default:
      return state;
  }
}
