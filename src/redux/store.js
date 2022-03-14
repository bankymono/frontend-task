import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { dashboardDataReducer } from './reducer';


const reducer = combineReducers({
    dashboardData:dashboardDataReducer
});

const middleware = [thunk];

const initialState= {
    dboardData:null
}

const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;