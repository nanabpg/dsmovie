import MovieCard from "components/MovieCard";
import axios from "axios";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

    const[pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []  );

    return (
        <>
           <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="mb-3 col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="mb-3 col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="mb-3 col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="mb-3 col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="mb-3 col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default Listing;