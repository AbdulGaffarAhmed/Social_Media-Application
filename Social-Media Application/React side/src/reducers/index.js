import { combineReducers } from "redux";

import Authreducer from './Authreducer';

import postReducer from "./postReducer";

export const reducers = combineReducers({Authreducer,postReducer})