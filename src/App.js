import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App(){
  return <HashRouter>
    {/* Route안에는 props가 2개. (1) 렌더링할 스크린 (2)뭘 할지 정해주는 것 */}
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/> 
  </HashRouter>
}


export default App;