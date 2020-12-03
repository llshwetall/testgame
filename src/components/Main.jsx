import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route,  Link } from 'react-router-dom';
import Home from "./Home.jsx";
import GameSpace from "./GameSpace.jsx";

class Main extends Component {
  state = {
    isMouseDown: false,
    disabled: false,
    time: 0,
    flag: false
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

  // gameend = () => {
  //   alert("khatam");
  // }
  render() {

    return (
      <div className="gamespace" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/gamespace' component={GameSpace}></Route>
    </Switch>
    </div>
    );
  }
}

export default Main;
