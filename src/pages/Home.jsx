import MovieCard from "../components/MovieCard"
import { searchMovies, getPopularMovies } from "../services/api";
import {useState, useEffect} from "react"
import '../css/Home.css';

function Home (){

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                console.log("Fetched popular movies:", popularMovies); // Debug log
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [])

    
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies")
        }
        finally{
            setLoading(false)
        }


        
    }

    return (
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for Movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading && !error ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.length === 0 ? (
              <div>No movies found.</div>
            ) : (
              movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            )}
          </div>
        )}
      </div>
    )

}

export default Home