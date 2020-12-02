import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import AccordionElement from './AccordionElement.jsx';
import glob from './global.jsx'


class GameSpace extends Component {
  state = {
    term: this.props.location.info.term,
    startApproval: this.props.location.info.startApproval,
    minApproval : this.props.location.info.minApproval,
    mode: this.props.location.info.mode,
    curFunds: 100,
    food: 100,
    time: 100,
    total: 100000,
    start: 0,
    last: 0,
    last_fund: 0,
    last_app: 0,
    health_perc: 60,
    defence_perc: 60,
    agriculture_perc: 60,
    education_perc: 60,
    last_health_perc: 60,
    last_defence_perc: 60,
    last_agriculture_perc: 60,
    last_education_perc: 60,
    approval: 80,
    dept : undefined,
    depts: [
        { id: glob.healthId, label: "Health", info: glob.healthInfo,invst: glob.healthInvst},
        { id: glob.defenceId, label: "Defence" ,info: glob.defenceInfo,invst: glob.defenceInvst },
        { id: glob.agricultureId, label: "Agriculture", info: glob.agricultureInfo,invst : glob.agricultureInvst },
        { id: glob.educationId, label: "Education", info: glob.educationInfo,invst: glob.educationInvst },
      ],
    healthOptions: [
      { id: glob.healthOp1, label: "ho1", cost: 2, status: false},
      { id: glob.healthOp2, label: "ho2", cost: 3, status: false},
      { id: glob.healthOp3, label: "ho3", cost: 2, status: false},
      { id: glob.healthOp4, label: "ho4", cost: 6, status: false},
      { id: glob.healthOp5, label: "ho5", cost: 3, status: false},
      { id: glob.healthOp6, label: "ho6", cost: 9, status: false},
    ],
    defenceOptions: [
      { id: glob.defenceOp1, label: "do1", cost: 2, status: false},
      { id: glob.defenceOp2, label: "do2", cost: 3, status: false},
      { id: glob.defenceOp3, label: "do3", cost: 2, status: false},
      { id: glob.defenceOp4, label: "do4", cost: 6, status: false},
      { id: glob.defenceOp5, label: "do5", cost: 3, status: false},
      { id: glob.defenceOp6, label: "do6", cost: 9, status: false},
    ],
    agricultureOptions: [
      { id: glob.agricultureOp1, label: "ao1", cost: 2, status: false},
      { id: glob.agricultureOp2, label: "ao2", cost: 3, status: false},
      { id: glob.agricultureOp3, label: "ao3", cost: 2, status: false},
      { id: glob.agricultureOp4, label: "ao4", cost: 6, status: false},
      { id: glob.agricultureOp5, label: "ao5", cost: 3, status: false},
      { id: glob.agricultureOp6, label: "ao6", cost: 9, status: false},
    ],
    educationOptions: [
      { id: glob.educationOp1, label: "eo1", cost: 2, status: false},
      { id: glob.educationOp2, label: "eo2", cost: 3, status: false},
      { id: glob.educationOp3, label: "eo3", cost: 2, status: false},
      { id: glob.educationOp4, label: "eo4", cost: 6, status: false},
      { id: glob.educationOp5, label: "eo5", cost: 3, status: false},
      { id: glob.educationOp6, label: "eo6", cost: 9, status: false},
    ],
  }

  
  getOptions = (id) => {
    switch(id)
    {
      case glob.healthId : return this.state.healthOptions;
      case glob.educationId : return this.state.educationOptions;
      case glob.agricultureId : return this.state.agricultureOptions;
      case glob.defenceId : return this.state.defenceOptions;
      default: break;
    }
  }

  increaseHealth = (x) => {
    this.setState({
      time: this.state.time,
      health_perc: this.state.health_perc + x*0.5,
    })
  }

  increaseDef = (x) => {
    this.setState({
      defence_perc: this.state.defence_perc + x*0.5,
    })
  }

  increaseAgri = (x) => {
    this.setState({
      agriculture_perc: this.state.agriculture_perc + x*0.5,
    })
  }

  increaseEdu = (x) => {
    this.setState({
      education_perc: this.state.education_perc + x*0.5,
    })
  }

  changeButtonStatus = (element) => {
    console.log(element.id, element.status)
    let curFunds = this.state.curFunds

    let options1 = this.state.defenceOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost
          glob.defenceInvst = glob.defenceInvst - c.cost
          this.increaseDef(-1*c.cost)
        }
        else
        {
          curFunds = curFunds - c.cost
          glob.defenceInvst = glob.defenceInvst + c.cost
          this.increaseDef(c.cost)
        }
        c.status = !c.status

        // console.log(curFunds, c.cost)
      }
      return c;
    });

    let options2 = this.state.healthOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost
          glob.healthInvst = glob.healthInvst - c.cost
          this.increaseHealth(-1*c.cost)
        }
        else
        {
          curFunds = curFunds - c.cost
          glob.healthInvst = glob.healthInvst + c.cost
          this.increaseHealth(c.cost)
        }
        
        // alert(glob.healthInvst)
        c.status = !c.status
        // console.log(curFunds, c.cost)
      }
      return c;
    });

    let options3 = this.state.agricultureOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost
          glob.agricultureInvst = glob.agricultureInvst - c.cost
          this.increaseAgri(-1*c.cost)
        }
        else
        {
          curFunds = curFunds - c.cost
          glob.agricultureInvst = glob.agricultureInvst + c.cost
          this.increaseAgri(c.cost)
        }

        c.status = !c.status
        // console.log(curFunds, c.cost)
      }
      return c;
    });

    let options4 = this.state.educationOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost
          glob.educationInvst = glob.educationInvst - c.cost
          this.increaseEdu(-1*c.cost)
        }
        else
        {
          curFunds = curFunds - c.cost
          glob.educationInvst = glob.educationInvst + c.cost
          this.increaseEdu(c.cost)
        }

        c.status = !c.status
        // console.log(curFunds, c.cost)
      }
      return c;
    });

    this.setState({ options1, options2, options3, options4, curFunds });
    // alert("set")
  }

  constructor(props) {
    super(props)
  }
  
  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now(),
    })
    this.timer = setInterval(() => this.setState({
      time: (this.state.total + this.state.start - Date.now() )/1000
    }), 1);
  }

  updatePerc = () => {
    
    let health_rate = 0.5
    let defence_rate = 0.2
    let education_rate = 0.2
    let agriculture_rate = 0.1

    this.setState({
      health_perc: (this.state.health_perc - health_rate).toFixed(1),
      defence_perc: (this.state.defence_perc - defence_rate).toFixed(1),
      education_perc: (this.state.education_perc - education_rate).toFixed(1),
      agriculture_perc: (this.state.agriculture_perc - agriculture_rate).toFixed(1),
      last: 100 - this.state.time,
    })

  }

  updateFund = () => {

    let added_fund = 0.2 * this.state.approval
    
    this.setState({
      last_fund: 100 - this.state.time,
      curFunds: this.state.curFunds + added_fund,
    })
  }

  updateVoter = () => {

    let health_change = this.state.health_perc - this.state.last_health_perc
    let def_change = this.state.defence_perc - this.state.last_defence_perc
    let agri_change = this.state.agriculture_perc - this.state.last_agriculture_perc
    let edu_change = this.state.education_perc - this.state.last_education_perc
    let app_change = 0.6*health_change + 0.4*def_change + 0.2*agri_change + 0.1*edu_change


    // alert(edu_change)
    this.setState({
      last_app: 100 - this.state.time,
      approval: (this.state.approval + app_change).toFixed(2),
      last_agriculture_perc: this.state.agriculture_perc,
      last_defence_perc: this.state.defence_perc,
      last_health_perc: this.state.health_perc,
      last_education_perc: this.state.education_perc,
    })
  }

  componentDidMount() {
    this.startTimer()
 }
    render() {
      // console.log(this.state.term, this.state.startApproval, this.state.minApproval, this.state.mode)
      // alert(this.state.curfunds)
      // alert(this.state.time)
      if (this.state.time < 0)
      {
        alert("time up bruh")
      }
      if ((100 - this.state.time) - this.state.last > 1)
      {
        this.updatePerc()
      }
      
      if ((100 - this.state.time) - this.state.last_fund > 20)
      {
        this.updateFund()
      }

      if ((100 - this.state.time) - this.state.last_app > 5)
      {
        this.updateVoter()
      }

      return (
          <React.Fragment>
            <NavBar />
            
      <div style={{color:'white'}}> Current funding : {this.state.curFunds} Time left : {Math.ceil(this.state.time)} Approval : {this.state.approval} health_perc : {this.state.health_perc} defence_perc : {this.state.defence_perc} agriculture_perc : {this.state.agriculture_perc} education_perc : {this.state.education_perc}</div>
            {this.state.depts.map(el =>
              <AccordionElement
                id={el.id}
                label={el.label}
                info={el.info}
                options={this.getOptions(el.id)}
                changeButtonStatus = {this.changeButtonStatus}
              />
            )}


          </React.Fragment>
        );
    }
}

export default GameSpace;
