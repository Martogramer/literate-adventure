import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from '../'

import { getAllCountries, getAllActivity, setCurrentPage } from "../../redux/actions/INDEX.JS";

const Home=()=>{
    const dispatch = useDispatch();
    const { countries, page, allActivity } = useSelector((state) => state);
    const [loader, setLoader] = useState(true);

    let countriesPerPage=10;
    const indexOfLastCountry = page * countriesPerPage - 1; // 1 * 10 -1 = 9 | 2 * 10 -1 = 19 | 3 * 10 -1 = 29
    const indexOfFirstCountry = page === 1
    ? indexOfLastCountry - (countriesPerPage - 1)
    : indexOfLastCountry - countriesPerPage; // 9 - (10-1) = 0 | 19 - 10 = 9 | 29 - 10 = 19
    const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
);

    const timer = (time) =>
    setTimeout(() => {
        setLoader(false);
    }, time);

    useEffect(() => {
        setLoader(true);
        dispatch(getAllActivity());
        timer(1000);
        dispatch(getAllCountries());
    
        return () => clearTimeout(timer);
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        setLoader(true);
        dispatch(getAllCountries());
        dispatch(setCurrentPage(1));
        timer(500);
    };
    


    
    return(
        <div>
            <div className={style.country}>

            </div>
        </div>
    )
}
export default Home