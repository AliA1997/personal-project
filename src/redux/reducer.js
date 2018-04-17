const initialState = {
    cars: [],
    username: '', 
    email: '', 
    type: '', 
    dealer: '', 
    search: '',
    loggedIn: false,
};

//Action Types 
const SEARCH = 'SEARCH';
const CHANGE_USERNAME = 'USERNAME';
const CHANGE_PASSWORD = 'PASSWORD';
const CHANGE_EMAIL = 'EMAIL';
const CHANGE_NAME = 'NAME';
const CHANGE_TYPE = 'CHANGE_TYPE';
const CHANGE_DEALER = 'CHANGE_DEALER';
const LOGIN = 'LOGIN';


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH: 
        return {...state, search: action.value};
        case CHANGE_USERNAME: 
        return {...state, username: action.value};
        case CHANGE_EMAIL: 
        return {...state, email: action.value};
        case CHANGE_NAME: 
        return {...state, name: action.value};
        case CHANGE_TYPE: 
        return {...state, type: action.value};
        case CHANGE_PASSWORD:
        return {...state, password: action.value}; 
        case LOGIN:
        return {...state, loggedIn: action.value};
        default: 
        return state;
    }
}
export const userLogin = (value) => {
    return {
        type: LOGIN,
        value: !value
    };
}
const clearState = (state = initialState) => {
    for(var key in state) {
        state[key] = '';
    }
    return state;
}
export const chgState = (e, type, value) => {
    e.preventDefault();
    switch(type) {
        case 'username': 
        return {
            type: CHANGE_USERNAME,
            value
        };
        case 'password': 
        return {
            type: CHANGE_PASSWORD,
            value
        };
        case 'email': 
        return {
            type: CHANGE_EMAIL,
            value
        };
        case 'name': 
        return {
            type: CHANGE_NAME,
            value
        };
        case 'type': 
        return {
            type: CHANGE_TYPE,
            value
        };
        case 'search': 
        return {
            type: SEARCH, 
            value
        };
        default: 
         clearState();
    }
}


export default reducer;