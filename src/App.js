import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {//바꿀 데이터는 state에 넣는다
    count: 0
  }
  add = () => {
    //state의 상태를 변경할 때는 react가 render function을 호출해서 바꿔주도록 해야한다.
    //setState를 해야 새 state와 함께 render function이 호출된다.
    this.setState(current => ({count:current.count + 1}))
    //this.state.count + 1는 좋은 코드가 아니다. 성능 이슈가 있음.
    //current를 이용하는 방법이 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법.
  };
  minus = () => {
    this.setState(current => ({count:current.count - 1}))
  };
  render(){
    return (
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button> 
        {/* this.add() 즉시 실행됨, this.add는 클릭했을때만 실행됨 */}
        <button onClick={this.minus}>Minus</button>
      </div>
    )
    
  }
}


export default App;