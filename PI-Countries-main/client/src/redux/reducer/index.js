import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_ID,
    GET_ALL_ACTIVITIES,
    SET_CURRENT_PAGE
} from '../actions/types'

const initialState={
    countries: [],
    allCountries: [],
    country: [],
    allActivity: [],
    page: 1,
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
        case SET_CURRENT_PAGE:
            return {
            ...state,
            page: payload,
            };
        default:
            return {...state};
}}
export default rootReducer;