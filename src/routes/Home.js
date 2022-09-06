import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.scss';

class Home extends React.Component {
    state = {
    isLoading: true,
    movies: [],
  } //root 위치
    getMovies = async () => {
    const { //구조 분할 할당
        data: {
        data: {movies},
        },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(movies) - data.data.movie의 array
    this.setState({movies, isLoading: false})
    }
    componentDidMount() {
    this.getMovies();
    }
    render() {
    const {isLoading, movies} = this.state;
    return(
        <section className='container'>
        {isLoading ? (<div className='loader'>
            <span className='loader_text'>Loading...</span>
            </div>) : (
            <div className='movies'>
                {movies.map((movie) => (
                //console.log(movie);
                <Movie  key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
                ))}
            </div>
            )
        }
        </section>
    );
    }
}

export default Home;
