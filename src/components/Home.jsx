import React, { Component } from 'react';
import { Link } from "react-router-dom";
import glob from './global.jsx'
import GameSpace from './GameSpace.jsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class Home extends Component {

  state = {
    term: glob.normalTerm,
    startApproval: glob.normalStartApproval,
    minApproval : glob.normalMinApproval,
    minWinApproval : glob.normalMinWinApproval,
    mode: 1
  }
  constructor(props) {
    super(props)
  }

  handleModeChange = (element) => {
      if (element.target.value === "Quick")
      {
        // alert(element.target.value)
        this.setState({mode: 2, term: glob.quickTerm, startApproval: glob.quickStartApproval, minApproval: glob.quickMinApproval, minWinApproval: glob.quickMinWinApproval})
      }
      else if (element.target.value === "Normal")
      {
        // alert(element.target.value)
        this.setState({mode: 1, term: glob.normalTerm, startApproval: glob.normalStartApproval, minApproval: glob.normalMinWinApproval, minApproval: glob.normalMinWinApproval})
      }
    }

    render() {

        return (
          <div>

          <div className="home">
          <Container fluid style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Row noGutters className="justify-content-md-left align-items-center"  style={{top: '20rem'}}>
            <img src="../pmcares.png" alt= "edit" width="650" height="160"/>
          </Row>
          </Container>


          <Container fluid style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 60 }}>
          <Row noGutters className="justify-content-md-center align-items-center"  style={{top: '80rem'}}>
          <Link to =
              {{
                pathname: "/gamespace",
                info: {
                  term: this.state.term,
                  startApproval : this.state.startApproval,
                  minApproval : this.state.minApproval,
                  minWinApproval : this.state.minWinApproval,
                  mode : this.state.mode
                 }
              }}
          >
          <button type="button" className="btn btn-outline-light btn-lg btn-block">
            Play
          </button>
          </Link>
          </Row>
          </Container>

          <Container fluid style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 20 }}>
          <Row noGutters className="justify-content-md-center align-items-center"  style={{top: '20rem'}}>
          <button type="button" className="btn btn-outline-light btn-sm "> How to Play </button>
          </Row>
          </Container>
          <Container fluid style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Row noGutters className="justify-content-md-center align-items-center"  style={{top: '20rem'}}>
          <FormControl component="fieldset">
          <RadioGroup name="mode1" defaultValue="Normal" onChange={this.handleModeChange} row>
          <FormControlLabel style={{color:'white'}} value="Normal" control={<Radio  />} label="Normal Mode" />
          <FormControlLabel style={{color:'white'}} value="Quick" control={<Radio />} label="Quick Mode" />
          </RadioGroup>
          </FormControl>
          </Row>
          </Container>



          </div>
          </div>
        );
    }
}

export default Home;
