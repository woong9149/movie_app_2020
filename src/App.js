import React from 'react';
import axios from "axios";

class App extends React.Component{

  state = {//바꿀 데이터는 state에 넣는다
   isLoading: true,
   movies: []
  }
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
        return <div>{isLoading ? "Loading" : "We are ready"}</div>;
      }
  }
export default App;