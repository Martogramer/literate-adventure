import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_ID,
    GET_ALL_ACTIVITIES
} from '../actions/types'

const initialState={
    countries: [],
    allCountries: [],
    country: [],
    allActivity: []
}

function rootReducer(state=initialState, {type, payload}){
    // eslint-disable-next-line default-case
    switch(type){
        case GET_ALL_COUNTRIES:
            return {
        ...state,
        countries: payload,
        allCountries: payload,
            };
        case GET_COUNTRY_ID:
            return {
        ...state,
        country: payload,
            };
        case GET_ALL_ACTIVITIES:
            return {
            ...state,
            allActivity: payload,
            };
}}
export default rootReducer;