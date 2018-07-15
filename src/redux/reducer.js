import { combineReducers } from 'redux';
import userReducer from './reducers/user_reducers';
import carReducer from './reducers/cars_reducers';

const reducer = combineReducers({
    user: userReducer,
    car: carReducer
});


export default reducer;