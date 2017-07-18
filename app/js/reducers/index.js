import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import drugs from './drug';
import draw from './draw';

const rootReducer = combineReducers({
  routing: router,
  drugs,
  drawOpen: draw,
});

export default rootReducer;
