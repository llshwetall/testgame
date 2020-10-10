import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
// import Main from './components/Main.jsx';
import Countdown from 'react-countdown';

class App extends Component {

  state = {
    isMouseDown: false,
    disabled: false,
    time: 0
  }
  constructor(props) {
    super(props)
    this.state.time = new Date().getTime();
  }

  handleMouseDown = (e) => {
    if(!this.state.disabled)
      this.setState({ isMouseDown: true });
    e.preventDefault();
  }

  handleMouseUp = (e) => {
    if(!this.state.disabled)
      this.setState({ isMouseDown: false });
    e.preventDefault();
  }

  handleDisableReadMouse = (val) => {
      this.setState({
        disabled: !val,
        isMouseDown: false
      });
  }

  gameend = () => {
    alert("khatam");
  }

  render() {

    return (
      <div className="gamespace" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
        <NavBar />

        <Countdown
        date={Date.now() + 1460}
        intervalDelay={0}
        precision={0}
        renderer={props => <div style = {{color:'white'}}>Number of days left: {props.total/1000}</div>}
        onComplete={this.gameend}
        >
        </Countdown>
      </div>
     );
  }
}

export default App;
