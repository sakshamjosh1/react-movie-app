import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No Favorite Movies yet</h2>
                <p>Start adding movies to your favorites and they will appear here</p>
            </div>
        );
    }

    return (
        <div>
            <header className='favorites'>Your Favorites</header>
            <div className="movies-grid">
                {favorites.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;