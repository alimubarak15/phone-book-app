import {applyMiddleware, createStore} from 'redux';
import {createLogicMiddleware} from 'redux-logic';
import {arrLogic} from './logics';
import {rootReducer} from './reducer';
// logic Middleware
const logicMiddleware = createLogicMiddleware(arrLogic);
// Store Config
export const store = createStore(rootReducer, applyMiddleware(logicMiddleware));
