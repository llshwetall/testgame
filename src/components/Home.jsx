import React, { Component } from 'react';
import { Link } from "react-router-dom";
import glob from './global.jsx'
import GameSpace from './GameSpace.jsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

class Home extends Component {

  state = {
    term: glob.normalTerm,
    startApproval: glob.normalStartApproval,
    minApproval : glob.normalMinApproval,
    mode: 1
  }
  constructor(props) {
    super(props)
  }

  handleModeChange = (element) => {
      if (element.target.value === "Quick")
      {
        // alert(element.target.value)
        this.setState({mode: 2, term: glob.quickTerm, startApproval: glob.quickStartApproval, minApproval: glob.quickMinApproval})
      }
      else if (element.target.value === "Normal")
      {
        // alert(element.target.value)
        this.setState({mode: 1, term: glob.normalTerm, startApproval: glob.normalStartApproval, minApproval: glob.normalMinApproval})
      }
    }

    render() {


        return (
          <div className="home">
          <img src="../pmcares.png" alt= "edit" width="650" height="200"/>
          <Link to =
              {{
                pathname: "/gamespace",
                info: {
                  term: this.state.term,
                  startApproval : this.state.startApproval,
                  minApproval : this.state.minApproval,
                  mode : this.state.mode
                 }
              }}
          >
          <button variant="outlined">
            Play
          </button>
          </Link>
          <FormControl component="fieldset">
          <RadioGroup name="mode1" defaultValue="Normal" onChange={this.handleModeChange}>
          <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
          <FormControlLabel value="Quick" control={<Radio />} label="Quick" />
          </RadioGroup>
          </FormControl>
          </div>
        );
    }
}

export default Home;
