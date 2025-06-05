import MovieCard from "../components/MovieCard"

function Home (){

    const movies=[
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Sinners", release_date: "2025"},
        {id: 3, title: "Fight Club", release_date: "1999"}
    ]

    return <div className="home">
        <div className="movie-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>

}

export default Home