import homeReducer from '../containers/reducer'

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
    homeReducer
  });
  return rootReducer;

}
