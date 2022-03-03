import axios from 'axios'
import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_ID,
    GET_ALL_ACTIVITIES
} from './types'

export const getAllCountries=(name)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/countries?name=${name ? name : ""}`)
        .then((response)=>{
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data
            })
        })
        .catch((error)=>{alert(error.response.data.message)})
    }
};

export const getCountryById=(id)=>{
    return(dispatch)=>{
        fetch(`http://localhost:3001/countries/${id}`)
        .then((data)=>data.json())
        .then((response)=>{
            return dispatch({
                type: GET_COUNTRY_ID,
                payload: response
            })
        })
        .catch((error)=>{console.log(error)})
    }
};

export const getAllActivity=()=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3001/activities`)
        .then((response)=>{
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: response.data
            })
        })
    }
};

