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
    approval: 100,
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

  changeButtonStatus = (element) => {
    console.log(element.id, element.status)
    let curFunds = this.state.curFunds

    let options1 = this.state.defenceOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
          curFunds = curFunds + c.cost
        else
          curFunds = curFunds - c.cost

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
          glob.healthInvst = glob.healthInvst + c.cost
        }
        else
        {
          curFunds = curFunds - c.cost
          glob.healthInvst = glob.healthInvst + c.cost
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
          curFunds = curFunds + c.cost
        else
          curFunds = curFunds - c.cost

        c.status = !c.status
        // console.log(curFunds, c.cost)
      }
      return c;
    });

    let options4 = this.state.educationOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
          curFunds = curFunds + c.cost
        else
          curFunds = curFunds - c.cost

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

  updateVoter = () => {
    let heath_expec = Math.floor(100 - this.state.time) * 2
    let defence_expec = Math.floor(100 - this.state.time)
    let agriculture_expec = Math.floor(100 - this.state.time)
    let education_expec = Math.floor(100 - this.state.time)
    let healthcut = (heath_expec - glob.healthInvst)*100/heath_expec
    let defencecut = (defence_expec - glob.defenceInvst)*100/defence_expec
    let agriculturecut = (agriculture_expec - glob.agricultureInvst)*100/agriculture_expec
    let educationcut = (education_expec - glob.educationInvst)*100/education_expec

    let down = 0
    let health_max = 4

    if (healthcut < 10 && healthcut > 0)
    {
      down = down + healthcut * 30 * health_max / 10000
    }
    else if (healthcut >= 30)
    {
      down = down + healthcut * healthcut * health_max / 10000
    }

    let defence_max = 4
    if (defencecut < 60 && defencecut > 0)
    {
      down = down + defencecut * 60 * defence_max / 10000
    }
    else if (defencecut >= 30)
    {
      down = down + defencecut * defencecut * defence_max / 10000
    }

    let agriculture_max = 5
    if (agriculturecut > 40)
    {
      down = down + (agriculturecut - 30) * agriculture_max / 4900
    }

    let education_max = 4
    if (educationcut > 70 && educationcut > 0)
    {
      down = down + (educationcut - 70) * education_max / 900
    }

    this.setState({
      approval: this.state.approval - down,
      last: 100 - this.state.time,
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
      if ((100 - this.state.time) - this.state.last > 5)
      {
        this.updateVoter()
      }
      
      return (
          <React.Fragment>
            <NavBar />
            
      <div style={{color:'white'}}> Current funding : {this.state.curFunds} Time left : {Math.ceil(this.state.time)} Approval : {this.state.approval} last : {this.state.last}</div>
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
