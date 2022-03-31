import {createStore, combineReducers} from "redux"
import Productreducer from "./reducer/Productreducer"
import Cartreducer from "./reducer/Cartreducer"
import { devToolsEnhancer } from 'redux-devtools-extension';

const root = combineReducers({
    Productreducer,
    Cartreducer
});

const store = createStore(root, devToolsEnhancer());
export default store;