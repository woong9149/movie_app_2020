import React from 'react';

function Food({fav}){//props.fav ={fav}
  return <h1>I love {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello !</h1> 
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="zzuggumi"/>
    </div>
  );
}


export default App;