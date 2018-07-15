const initialState = {
    account: {
        name: '', //Done
        username: '', //Done
        email: '',  //Done
        dealer: null, //Done
        imageurl: '', //Done
        password: '',
        company_name: '', //Done
        phone_number: '',//Done
        address: '',
        zipcode: '',
        city: '',
        state: '',
        country: ''
    },
    states: [
            "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA",
            "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC",
            "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"
    ]
}

//User Action Types
/*Done*/
const SEARCH = 'SEARCH';
const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_DEALER = 'CHANGE_DEALER';
const CHANGE_IMAGEURL = 'CHANGE_IMAGEURL';
const CHANGE_COMPANY_NAME = 'CHANGE_COMPANY_NAME';
const CHANGE_PHONE_NUMBER = 'CHANGE_PHONE_NUMBER';

//Address Action Types <-- in same object <- account.
const CHANGE_ADDRESS = 'CHANGE_ADDRESS';
const CHANGE_ZIPCODE = 'CHANGE_ZIPCODE';
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_STATE = 'CHANGE_STATE';
const CHANGE_COUNTRY = 'CHANGE_COUNTRY';

//General Function Types 
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


const userReducer = (state = initialState, action) => {
    switch(action.type) {
        //Input changes in username field
        case CHANGE_USERNAME: 
        return {...state, account: Object.assign({}, state.account, {username: action.value})};
        //Input changes in email field        
        case CHANGE_EMAIL: 
        return {...state, account: Object.assign({}, state.account, {email: action.value})};
        //Input changes in name field        
        case CHANGE_NAME: 
        return {...state, account: Object.assign({}, state.account, {name: action.value})};
        //Input changes in password field        
        case CHANGE_PASSWORD:
        return {...state, account: Object.assign({}, state.account, {password: action.value})}; 
        //Input changes in dealer field        
        case CHANGE_DEALER: 
        return {...state, account: Object.assign({}, state.account, {dealer: action.value})};
        //Input changes in imageurl field        
        case CHANGE_IMAGEURL: 
        return {...state, account: Object.assign({}, state.account, {imageurl: action.value})};
        // //Input changes in company_name field        
        case CHANGE_COMPANY_NAME: 
        return {...state, account: Object.assign({}, state.account, {company_name: action.value})};
        //Input changes in phone number field        
        case CHANGE_PHONE_NUMBER:
        return {...state, account: Object.assign({}, state.account, {phone_number: action.value})}; 
        //
        //Address Actions
        //Input changes in password field        
        case CHANGE_ADDRESS:
        return {...state, account: Object.assign({}, state.account, {address: action.value})}; 
        //Input changes in dealer field        
        case CHANGE_ZIPCODE: 
        return {...state, account: Object.assign({}, state.account, {zipcode: action.value})};
        //Input changes in imageurl field        
        case CHANGE_CITY: 
        return {...state, account: Object.assign({}, state.account, {city: action.value})};
        //Input changes in company_name field        
        case CHANGE_STATE: 
        return {...state, account: Object.assign({}, state.account, {state: action.value})};
        //Input changes in country field        
        case CHANGE_COUNTRY:
        return {...state, account: Object.assign({}, state.account, {country: action.value})}; 
        //
        case LOGIN: 
        return {...state, account: Object.assign({}, state.account, action.currentAccount)};
        case LOGOUT: 
        return {...state, account: action.payload};
        default: 
        return state;
    }
}

export const userLogin = (userInfo) => {
    return {
        type: LOGIN,
        currentAccount: userInfo
    };
}


export const userLogout = () => {
    return {
        type: LOGOUT,
        payload: ''
    };
}

export const chgUserState = (e, type, value) => {
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
        case 'dealer': 
        return {
            type: CHANGE_DEALER,
            value
        };
        case 'company': 
        return {
            type: CHANGE_COMPANY_NAME,
            value
        };
        case 'phone_number': 
        return {
            type: CHANGE_PHONE_NUMBER,
            value
        };
        case 'search': 
        return {
            type: SEARCH, 
            value
        };
        default: 
         return initialState;
    }
}


export const chgAddressState = (e, type, value) => {
    e.preventDefault();
    switch(type) {
        case 'address':
        return {
            type: CHANGE_ADDRESS,
            value
        };
        case 'zipcode': 
        return {
            type: CHANGE_ZIPCODE,
            value
        };
        case 'city':
        return {
            type: CHANGE_CITY,
            value
        };
        case 'state':
        return {
            type: CHANGE_STATE,
            value
        };
        case 'country':
        return {
            type: CHANGE_COUNTRY,
            value
        }
        default: 
        return;
    }
}

export const clearState = (state = initialState) => {
    for(var key in state) {
        state[key] = '';
    }
    return state;
}

export default userReducer;