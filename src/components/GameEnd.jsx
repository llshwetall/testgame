import React, { Component } from 'react';
import glob from './global.jsx'

class GameEnd extends Component {

  state = {
    term: glob.normalTerm,
    startApproval: glob.normalStartApproval,
    minApproval : glob.normalMinApproval,
    mode: 1
  }


    render() {

        return (
          <div>


          </div>
        );
    }
}

export default GameEnd;
