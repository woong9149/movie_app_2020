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
        return <section class="container">
                  {isLoading ? <div class="loader">
                                  <span class="loader__text">Loding...</span>
                               </div> 
                    : (
                      <div class="movies">
                        {movies.map(movie =>(
                          <Movie 
                              key={movie.id}
                              id={movie.id} 
                              year={movie.year} 
                              title={movie.title} 
                              summary={movie.summary} 
                              poster={movie.medium_cover_image}
                          />
                         ))}
                      </div>
                    )
                   }
                 
                 </section>;
      }
  }
export default App;