import { combineReducers } from 'redux';

import gameReducer from './gameReducer';
import toggle from './toggleReducer';

const rootReducer = combineReducers({
    gameReducer,
    toggle,
});

export default rootReducer;
