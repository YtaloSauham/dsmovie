import MovieStart from "components/MovieStart";
import Pagination from "components/Pagination";
import MovieScore from "components/MovieScore";
import MovieCard from "components/MovieCard";
export default function Listing() {
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 cl-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 cl-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 cl-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 cl-xl-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 cl-xl-3">
                        <MovieCard />
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 cl-xl-3">
                        <MovieCard />
                    </div>

            </div>

        </>
    );
}