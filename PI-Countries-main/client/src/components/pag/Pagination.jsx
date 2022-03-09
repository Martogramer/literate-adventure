import React from "react";


const Pagination=({countriesXPage, allCountries, paginate, currentPage})=>{
    const pageNumber = []
    for(let i=1; i< Math.ceil(allCountries / countriesXPage); i++){
        pageNumber.push(i)
    }

    return(
        <div>
            <ul>
                {pageNumber ?
                pageNumber.map(num =>(
                    <li key={num}>
                        <a href='#top' onClick={()=>paginate(num)} id={(currentPage === num)}>{num}</a>
                    </li>
                )) : null }
            </ul>
        </div>
    )
}
export default Pagination