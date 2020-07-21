import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture,rating}){//props.fav ={fav}
  return <div>
  <h1>I love {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src={picture}></img>
  </div>
}

const foodILike = [
  {
    id:1,
  name: "Kimchi",
  image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  rating: 5
},
  {
    id:2,
  name: "bulgogi",
  image: "https://images.unsplash.com/photo-1527578054032-8d8f044e013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  rating: 4
},
  {
    id:3,
  name: "kimbap",
  image: "https://dimg.donga.com/ugc/CDB/WOMAN/Article/5e/dd/c1/1a/5eddc11a003fd2738de6.jpg",
  rating: 3
},
  {
    id:4,
  name: "samgyetang",
  image: "https://images.unsplash.com/photo-1553531009-9a46e21e6cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  rating: 2
}
  ];

  function renderFood(dish){
    console.log('dish: ',dish);
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/> //key prop은 Food 컴포넌트로 전달되지 않는다.react 내부에서 사용하기 위함이다.
  }

  Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
  }

function App() {
  return (
    <div className="App">
        {foodILike.map(renderFood)}
    </div>
  );
}

export default App;