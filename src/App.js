import React, { Component } from 'react';
import Main from './components/Main.jsx';

class App extends Component {



  render() {

    // <Countdown
    // date={Date.now() + 1460}
    // intervalDelay={0}
    // precision={0}
    // renderer={props => <div style = {{color:'white'}}>Number of days left: {props.total/1000}</div>}
    // onComplete={this.gameend}
    // >
    // </Countdown>
    return (
      <div>
        <Main />
      </div>
     );
  }
}

export default App;
