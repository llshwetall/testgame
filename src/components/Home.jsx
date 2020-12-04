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
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

class Home extends Component {

  state = {
    term: glob.normalTerm,
    startApproval: glob.normalStartApproval,
    minApproval : glob.normalMinApproval,
    minWinApproval : glob.normalMinWinApproval,
    mode: 1,
    showTutorial: false,
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

    handleShowTutorial = () =>
    {
      this.setState({showTutorial:false});
    }

    handleTutorial = () => {
    this.setState({  showTutorial:true });
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
          <button type="button" className="btn btn-outline-light btn-sm " onClick={this.handleTutorial}> How to Play </button>
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
          <Modal aria-labelledby="contained-modal-title-vcenter" style={{opacity: 1 }} size="lg" centered show={this.state.showTutorial} onHide={this.handleShowTutorial}>
            <Modal.Header closeButton>
              <Modal.Title>Tutorial</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height:'500px'}}>

            <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div>
                1. Aim: <br/><br/>
                  <div className="tutBody">
                  You play as the Prime Minister of the country. The goal is to complete the end of your term with enough voter approval to win the next elections.
                 <br/> <br/>
                  </div>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                2. Policies: <br/><br/>
                  <div className="tutBody">
                  You can select policies to implement depending on the amount of funds you have. <br/> <br/>
                  Policies impact the functioning of a department. The amount of funds needed to invest in a policy is indicated next to the policy name <br/> <br/>
                  Hover over a policy to understand what it does. <br/> <br/>
                  </div>
                  <div className="centerAlign">
                  <img src="../option.png" alt= "weight" className="center"/><br/> <br/>
                  </div>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                3. Departments <br/><br/>
                  <div className="tutBody">
                  The functioning of a department is indicated by the skill bars. The color turns red when the performance is lesser than 30. <br/><br/>
                  The game ends if the skill bar percentage reaches 0 for any of the departments.<br/> <br/>
                  </div>
                  <div className="centerAlign">
                  <img src="../bar.png" alt= "Algo" width="200" className="center"/><br/> <br/>
                  </div>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                4. Reports<br/><br/>
                  <div className="tutBody">
                  You are given mid-weekly reports of the state of different departments. <br/> <br/>
                  The amount of funds and the time left in your term are shown <br/> <br/>
                  The current voter approval is also indicated. This depends on the state of the different departments.
                  You need to maintain a atleast a certain percentage of voter approval throughout your term (indicated in the report), else you will be impeached.
                  You also need to ensure that the voter approval at the end of your term is enough to win the next elections (also indicated in the report)  <br/> <br/>
                  </div>
                  <div className="centerAlign">
                  <img src="../analysis.png" alt= "Analysis" className="center"/><br/> <br/>
                  </div>
              </div>
            </li>


            </ul>

            </Modal.Body>

          </Modal>
          </div>
        );
    }
}

export default Home;
