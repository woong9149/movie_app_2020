import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{

  state = {//바꿀 데이터는 state에 넣는다
   isLoading: true,
   movies: []
  }
  getMovies = async () => {
    const {data: { data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading:false })
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
        return <section className="container">
                  {isLoading ? <div className="loader">
                                  <span className="loader__text">Loding...</span>
                               </div> 
                    : (
                      <div className="movies">
                        {movies.map(movie =>(
                          <Movie 
                              key={movie.id}
                              id={movie.id} 
                              year={movie.year} 
                              title={movie.title} 
                              summary={movie.summary} 
                              poster={movie.medium_cover_image}
                              genres={movie.genres}
                          />
                         ))}
                      </div>
                    )
                   }
                 
                 </section>;
      }
  }
export default App;