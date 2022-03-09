











































/* import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import style from '../'
import Country from '../contry/Country'
import Loading from '../loader/Loading'
import Pagination from "../pag/Pagination";

import { getAllCountries, getAllActivity, setCurrentPage, filterCountryByContinent, filterCountryByActivity, orderCountries } from "../../redux/actions/index";

const Home=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(Loading())
    }, [dispatch]);
    const { countries, page, allActivity } = useSelector((state) => state);
    const loader = useSelector((state)=>state.Loading) */
/*     const [loader, setLoader] = useState(true);
    const [filters, setFilters] = useState(false);
    const [setOrder]=useState();
    const [loader, setLoader] = useState(true);
    const [filters, setFilters] = useState(false);
    const [setOrder]=useState(); */

/*     const [currentPage, setCurrentPage] = useState(1);
    const [countriesXPage] = useState(12);

    const indexOfLastCountry = currentPage * countriesXPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesXPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
 */


/*     let countriesPerPage=10;
    const indexOfLastCountry = page * countriesPerPage - 1; // 1 * 10 -1 = 9 | 2 * 10 -1 = 19 | 3 * 10 -1 = 29
    const indexOfFirstCountry = page === 1
    ? indexOfLastCountry - (countriesPerPage - 1)
    : indexOfLastCountry - countriesPerPage; // 9 - (10-1) = 0 | 19 - 10 = 9 | 29 - 10 = 19
    const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
); */




/*     const handleFilterContinent = (e) => {
        e.preventDefault();
        dispatch(filterCountryByContinent(e.target.value));
        dispatch(setCurrentPage(1));
        setOrder(e.target.value);
    };
    
    const handleFilterActivity = (e) => {
        e.preventDefault();
        dispatch(filterCountryByActivity(e.target.value));
        setOrder(e.target.value);
    };
    
    const handleOrdered = (e) => {
        e.preventDefault();
        dispatch(orderCountries(e.target.value));
        setOrder(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setLoader(true);
        dispatch(getAllCountries());
        dispatch(setCurrentPage(1));
        timer(500);
    };
     */


    
/*     return(
        <div>
                {!loader 
                ? 
            
                <div >
                    {
                        currentCountries?.map(country=>(
                            <Country 
                                key={country.id}
                                name={country.name}
                                flags={country.flags}
                                continent={country.continent}/>
                        ))
                    }
                </div>
                :
                <Loading />
                }
    <Pagination countriesXPage={countriesXPage} allCountries={countries.length} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}
export default Home */