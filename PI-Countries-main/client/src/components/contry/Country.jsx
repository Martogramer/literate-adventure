
export default function Country({id,name,flags,continent}){
    return(
        <div>
            <link rel="" href={`/home/detail/${id}`} >
                    <img src={flags} alt=""/>
                    <div>
                        <h2>{name}</h2>
                        <p><span>Continente</span>: {continent}</p>
                    </div>
            </link>
        </div>
    )
}