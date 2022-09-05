import './App.css';
import React from 'react';

class App extends React.Component {
  state = {isLoading: true} //root 위치
  componentDidMount() {
    setTimeout(() => {})
  }
  render() {
    const {isLoading} = this.state;
    return(
      <div>
        {isLoading ? 'Loading...' : 'We are ready'}
      </div>
    );
  }
}

export default App;
