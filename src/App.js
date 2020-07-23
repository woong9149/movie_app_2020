import React from 'react';

class App extends React.Component{

  state = {//바꿀 데이터는 state에 넣는다
   isLoading: true
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false});
    },6000);
  }
  render(){
const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}
export default App;