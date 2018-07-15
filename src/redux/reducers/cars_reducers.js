
let yearsArr = [];
for(let i = 2018; i >= 1940; i--) {
    yearsArr.push(i);
}

const initialState = {
    cars: [],
    search: '', //Done
    car: {
        type: '',//Done
        make: '',//Done
        model: '',//Done
        year: null,//Done
        odometer: null,//Done
        location: '',//Done
        description: '',//Done
        price: null,//Done
        imageurl: ''//Done
    },
    years: yearsArr,
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
    ],
    conditionReportLocations:{
        AZ : [
            {name: 'Mr. Mechanic', coordinates: {lat:33.57189,lng: -112.08784}},  
            {name: '3A Automotive & Diesal Repair', coordinates: {lat:33.57106,lng: -112.0931}},  
            {name: 'Martin\'s Auto Repair', coordinates: {lat:33.49038,lng: -112.04776}},  
            {name: 'BMW North Scottsdale', coordinates: {lat:33.6489,lng: -111.9266}},  
            {name: 'Mercedes-Benz of Scottsdale', coordinates: {lat:33.50557,lng: -111.92516}},  
            {name: 'Sanderson Ford', coordinates: {lat:33.53017,lng: -112.17038}},  
            {name: 'My Mechanic Maintenance & Repair', coordinates: {lat:32.28039,lng: -111.00354}},  
            {name: 'Western Honda Powersports', coordinates: {lat:33.46543,lng: -111.93642}},  
            {name: 'Camelback Toyota', coordinates: {lat:33.51058,lng: -112.04967}}
        ],
        CA : [
            {name: 'Nissan Service', coordinates: {lat:34.13526,lng: -117.4458}},
            {name: 'BMW of Ontario', coordinates: {lat:34.04912,lng: -117.54595}},
            {name: 'Mercedes USA LLC', coordinates: {lat:34.11794,lng: -117.4861}},
            {name: 'Arrow Auto Repair', coordinates: {lat:34.09971, lng: -117.46115}}, 
            {name: 'Walter\'s Mercedes-Benz of Riverside', coordinates: {lat:33.92476,lng: -117.41626}},
            {name: 'BMW of Riverside', coordinates: {lat:33.92303,lng: -117.41715}},                                   
            {name: 'Riverside Honda', coordinates: {lat:33.92504,lng: -117.41932}},                                   
            {name: 'Scotty\'s Auto Repair', coordinates: {lat:33.93819,lng: -117.29419}},                                   
            {name: 'Lawrence\'s Auto Repair', coordinates: {lat:33.79236,lng: -117.91332}},                                   
            {name: 'Import Automotive Repair', coordinates: {lat:37.66406, lng: -121.03014}},
            {name: 'The Small Car Shop', coordinates: {lat:36.76041,lng: -119.74748}},  
            {name: 'Mercedes Benz Of Anaheim', coordinates: {lat:33.86027,lng: -117.79859}},  
            {name: 'Miller Toyota of Anaheim', coordinates: {lat:33.85271,lng: -117.94279}},  
            {name: 'Mechanics R US', coordinates: {lat:37.65621,lng: -122.07195}},  
            {name: 'Honda of Hayward', coordinates: {lat:37.65967,lng: -122.0741}},  
            {name: 'AutoNation Toyota Hayward', coordinates: {lat:37.66092,lng: -122.07519}}               
        ],  
        NV: [
            {name: 'I AM Mechanics Auto Repair', coordinates: {lat:36.14858,lng: -115.24388}},  
            {name: 'Busy Buggy Auto Repair', coordinates: {lat:36.12729,lng: -115.19283}},  
            {name: 'Samurai Motors', coordinates: {lat:36.1273,lng: -115.19299}},  
            {name: 'Mercedes Repair European Imports', coordinates: {lat:36.15818,lng: -115.31658}},  
            {name: 'Zip Zap Auto', coordinates: {lat:36.21979,lng: -115.27789}},  
            {name: 'Findley Honda', coordinates: {lat:36.2754,lng: -115.25779}},  
            {name: 'Salon Honda 4', coordinates: {lat:36.16467,lng: -115.06064}},  
            {name: 'AutoNation Toyota Las Vegas', coordinates: {lat:36.14526,lng: -115.23072}},  
            {name: 'BMW of Las Vegas', coordinates: {lat:36.1451,lng: -115.24419}},
            {name: 'Fletcher Jones Imports', coordinates: {lat:36.14488,lng: -115.25301}},  
            {name: 'Valey Automotive-Auto Repair', coordinates: {lat:36.06583,lng: -115.01701}},  
            {name: 'Mercedes-Benz of Henderson', coordinates: {lat:36.04489,lng: -115.02425}},  
            {name: 'Ford Country', coordinates: {lat:36.04881,lng: -115.02778}}
        ],     
    },
};

//Action Types 
const SEARCH = 'SEARCH';

//Car Action Types
const CHANGE_MAKE = 'CHANGE_MAKE';
const CHANGE_MODEL = 'CHANGE_MODEL';
const CHANGE_YEAR = 'CHANGE_YEAR';
const CHANGE_MILES = 'CHANGE_MILES';
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
const CHANGE_CAR_TYPE = 'CHANGE_CAR_TYPE';
const CHANGE_LOCATION = 'CHANGE_LOCATION';
const CHANGE_PRICE = 'CHANGE_PRICE';


const GET_CARS = 'GET_CARS';

const  carReducer = (state=initialState, action) => {
    switch(action.type) {     
        //Input changes in search bar.
        case SEARCH: 
        return {...state, search: action.value};
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
        //Input changes to the description field 
        case CHANGE_DESCRIPTION:
        return {...state, car: Object.assign({}, state.car, {description: action.value})};
        //Input changes in the car type field.
        case CHANGE_CAR_TYPE: 
        return {...state, car: Object.assign({}, state.car, {type: action.value})};

        // //Input changes in car image field        
        // case CHANGE_CAR_IMAGEURL: 
        // return {...state, car: Object.assign({}, state.car, {imageurl: action.value})};
        //Input changes in location field 
        case CHANGE_LOCATION: 
        return {...state, car: Object.assign({}, state.car, {location: action.value})};
        //Input changes in price field        
        case CHANGE_PRICE:
        return {...state, car: Object.assign({}, state.car, {price: action.value})}; 
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
        case 'description':
        return {
            type: CHANGE_DESCRIPTION,
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
         return initialState;
    }
}

export const clearState = (state = initialState) => {
    for(var key in state) {
        state[key] = '';
    }
    return state;
}
export default carReducer;
