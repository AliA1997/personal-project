
let pricesArr = [];
for(let i = 300; i < 10000; i < 1500 ? i += 100 : i += 500) {
    pricesArr.push(i);
}
let yearsArr = [];
for(let i = 2018; i >= 1940; i--) {
    yearsArr.push(i);
}


const initialState = {
    cars: [],
    account: {
        name: '', //Done
        username: '', //Done
        email: '',  //Done
        type: '', //Done
        dealer: null, //Done
        imageurl: '', //Done
        company_name: '', //Done
        phone_number: null//Done
    },
    search: '', //Done
    car: {
        type: '',//Done
        make: '',//Done
        model: '',//Done
        year: null,//Done
        odometer: null,//Done
        location: '',//Done
        price: null,//Done
        imageurl: ''//Done
    },
    currentUser: {},//Done
    years: yearsArr, 
    prices: pricesArr,
    locations: [
        'Fontana, CA',
        'Anaheim, CA',
        'Hayward, CA', 
        'Modesto, CA',
        'Fresno, CA',
        'Riverside, CA',
        'Scottsdale, AZ',
        'Phoenix, AZ',
        'Tucson, AZ',
        'Las Vegas, NV', 
        'Henderson, NV'
    ]
};

//Action Types 
//User Action Types
/*Done*/
const SEARCH = 'SEARCH';
const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_TYPE = 'CHANGE_TYPE';
const CHANGE_DEALER = 'CHANGE_DEALER';
const CHANGE_IMAGEURL = 'CHANGE_IMAGEURL';
const CHANGE_COMPANY_NAME = 'CHANGE_COMPANY_NAME';
const CHANGE_PHONE_NUMBER = 'CHANGE_PHONE_NUMBER';

//Car Action Types
const CHANGE_MAKE = 'CHANGE_MAKE';
const CHANGE_MODEL = 'CHANGE_MODEL';
const CHANGE_YEAR = 'CHANGE_YEAR';
const CHANGE_MILES = 'CHANGE_MILES';
const CHANGE_CAR_TYPE = 'CHANGE_CAR_TYPE';
const CHANGE_LOCATION = 'CHANGE_LOCATION';
const CHANGE_CAR_IMAGEURL = 'CHANGE_CAR_IMAGEURL';
const CHANGE_PRICE = 'CHANGE_PRICE';

//General Function Types 
const LOGIN = 'LOGIN';
const GET_CARS = 'GET_CARS';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        //Input changes in search bar.
        case SEARCH: 
        return {...state, search: action.value};
        //Input changes in username field
        case CHANGE_USERNAME: 
        return {...state, account: Object.assign({}, state.account, {username: action.value})};
        //Input changes in email field        
        case CHANGE_EMAIL: 
        return {...state, account: Object.assign({}, state.account, {email: action.value})};
        //Input changes in name field        
        case CHANGE_NAME: 
        return {...state, account: Object.assign({}, state.account, {name: action.value})};
        //Input changes in type radio-button        
        case CHANGE_TYPE: 
        return {...state, account: Object.assign({}, state.account, {type: action.value})};
        //Input changes in password field        
        case CHANGE_PASSWORD:
        return {...state, account: Object.assign({}, state.account, {password: action.value})}; 
        //Input changes in dealer field        
        case CHANGE_DEALER: 
        return {...state, account: Object.assign({}, state.account, {dealer: action.value})};
        //Input changes in imageurl field        
        case CHANGE_IMAGEURL: 
        return {...state, account: Object.assign({}, state.account, {imageurl: action.value})};
        //Input changes in company_name field        
        case CHANGE_COMPANY_NAME: 
        return {...state, account: Object.assign({}, state.account, {company_name: action.value})};
        //Input changes in phone number field        
        case CHANGE_PHONE_NUMBER:
        return {...state, account: Object.assign({}, state.account, {phone_number: action.value})}; 
        //
        //chgCarState Actions 
        //Input changes in make field
        case CHANGE_MAKE: 
        return {...state, car: Object.assign({}, state.car, {make: action.value})};
        //Input changes in model field        
        case CHANGE_MODEL:
        return {...state, car: Object.assign({}, state.car, {model: action.value})}; 
        //Input changes in year field        
        case CHANGE_YEAR: 
        return {...state, car: Object.assign({}, state.car, {year: action.value})};
        //Input changes in imageurl field        
        case CHANGE_MILES: 
        return {...state, car: Object.assign({}, state.car, {odometer: action.value})};
        //Input changes in the car type field.
        case CHANGE_CAR_TYPE: 
        return {...state, car: Object.assign({}, state.car, {type: action.value})};

        //Input changes in car image field        
        case CHANGE_CAR_IMAGEURL: 
        return {...state, car: Object.assign({}, state.car, {imageurl: action.value})};
        //Input changes in location field 
        case CHANGE_LOCATION: 
        return {...state, car: Object.assign({}, state.car, {location: action.value})};
        //Input changes in price field        
        case CHANGE_PRICE:
        return {...state, car: Object.assign({}, state.car, {price: action.value})}; 
        //When user logs in, or when they see the dashboard. 
        case LOGIN: 
        return {...state, currentUser: Object.assign({}, state.currentUser, action.currentAccount)};
        case GET_CARS:
        return {...state, cars: action.cars};
        default: 
        return state;

    }
}

export const retrieveCars = (cars) => {
    return {
        type: GET_CARS,
        cars,
    };
}

export const userLogin = (currentAccount) => {
    return {
        type: LOGIN,
        currentAccount
    };
}
const clearState = (state = initialState) => {
    for(var key in state) {
        state[key] = '';
    }
    return state;
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
        case 'type': 
        return {
            type: CHANGE_TYPE,
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
        case 'image': 
        return {
            type: CHANGE_IMAGEURL,
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
         clearState();
    }
}

export const chgCarState = (e, type, value) => {
    e.preventDefault();
    switch(type) {
        case 'make': 
        return {
            type: CHANGE_MAKE,
            value
        };
        case 'model': 
        return {
            type: CHANGE_MODEL,
            value
        };
        case 'year': 
        return {
            type: CHANGE_YEAR,
            value
        };
        case 'miles': 
        return {
            type: CHANGE_MILES,
            value
        };
        case 'car_type': 
        return {
            type: CHANGE_CAR_TYPE,
            value
        };
        case 'image': 
        return {
            type: CHANGE_CAR_IMAGEURL,
            value
        };
        case 'location': 
        return {
            type: CHANGE_LOCATION,
            value
        };
        case 'price': 
        return {
            type: CHANGE_PRICE, 
            value
        };
        default: 
         clearState();
    }
}

export default reducer;