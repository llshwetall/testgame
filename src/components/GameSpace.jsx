import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import AccordionElement from './AccordionElement.jsx';
import glob from './global.jsx'
import SkillBar from 'react-skillbars';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { PieChart } from 'react-minimal-pie-chart';
import Card from 'react-bootstrap/Card'
import Sound from 'react-sound';
import { Redirect } from 'react-router';


class GameSpace extends Component {
  state = {
    isGameOver: false,
    overId: -1,
    isDeptOverId: -1,
    term: this.props.location.info.term,
    startApproval: this.props.location.info.startApproval,
    minApproval : this.props.location.info.minApproval,
    mode: this.props.location.info.mode,
    curFunds: 15,
    food: 100,
    time: 360,
    total: 240,
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
    sc1_time: 100000000,
    sc2_time: 100000000,
    sc3_time: 100000000,
    sc4_time: 100000000,
    sc5_time: 100000000,
    sc6_time: 100000000,
    sc7_time: 100000000,
    sc8_time: 100000000,
    sc1_flag: true,
    sc2_flag: true,
    sc3_flag: true,
    sc4_flag: true,
    sc5_flag: true,
    sc6_flag: true,
    sc7_flag: true,
    sc8_flag: true,
    approval: 40,
    dept : undefined,
    curDept : glob.healthId,
    depts: [
        { id: glob.healthId, label: "Health Policies", info: glob.healthInfo,invst: glob.healthInvst},
        { id: glob.defenceId, label: "Defence Policies" ,info: glob.defenceInfo,invst: glob.defenceInvst },
        { id: glob.agricultureId, label: "Agriculture Policies", info: glob.agricultureInfo,invst : glob.agricultureInvst },
        { id: glob.educationId, label: "Education Policies", info: glob.educationInfo,invst: glob.educationInvst },
      ],
    healthOptions: [
      { id: glob.healthOp1, label: glob.healthOp1Label + String(glob.healthOp1Cost), cost: glob.healthOp1Cost, status: false, info: glob.healthOp1Info},
      { id: glob.healthOp2, label: glob.healthOp2Label + String(glob.healthOp2Cost), cost: glob.healthOp2Cost, status: false, info: glob.healthOp2Info},
      { id: glob.healthOp3, label: glob.healthOp3Label + String(glob.healthOp3Cost), cost: glob.healthOp3Cost, status: false, info: glob.healthOp3Info},
      { id: glob.healthOp4, label: glob.healthOp4Label + String(glob.healthOp4Cost), cost: glob.healthOp4Cost, status: false, info: glob.healthOp4Info},
      { id: glob.healthOp5, label: glob.healthOp5Label + String(glob.healthOp5Cost), cost: glob.healthOp5Cost, status: false, info: glob.healthOp5Info},
      { id: glob.healthOp6, label: glob.healthOp6Label + String(glob.healthOp6Cost), cost: glob.healthOp6Cost, status: false, info: glob.healthOp6Info},
      { id: glob.healthOp7, label: glob.healthOp7Label + String(glob.healthOp7Cost), cost: glob.healthOp7Cost, status: false, info: glob.healthOp7Info},
      { id: glob.healthOp8, label: glob.healthOp8Label + String(glob.healthOp8Cost), cost: glob.healthOp8Cost, status: false, info: glob.healthOp8Info},
    ],
    defenceOptions: [
      { id: glob.defenceOp1, label: glob.defenceOp1Label + String(glob.defenceOp1Cost), cost: glob.defenceOp1Cost, status: false, info: glob.defenceOp1Info},
      { id: glob.defenceOp2, label: glob.defenceOp2Label + String(glob.defenceOp2Cost), cost: glob.defenceOp2Cost, status: false, info: glob.defenceOp2Info},
      { id: glob.defenceOp3, label: glob.defenceOp3Label + String(glob.defenceOp3Cost), cost: glob.defenceOp3Cost, status: false, info: glob.defenceOp3Info},
      { id: glob.defenceOp4, label: glob.defenceOp4Label + String(glob.defenceOp4Cost), cost: glob.defenceOp4Cost, status: false, info: glob.defenceOp4Info},
      { id: glob.defenceOp5, label: glob.defenceOp5Label + String(glob.defenceOp5Cost), cost: glob.defenceOp5Cost, status: false, info: glob.defenceOp5Info},
      { id: glob.defenceOp6, label: glob.defenceOp6Label + String(glob.defenceOp6Cost), cost: glob.defenceOp6Cost, status: false, info: glob.defenceOp6Info},
      { id: glob.defenceOp7, label: glob.defenceOp7Label + String(glob.defenceOp7Cost), cost: glob.defenceOp7Cost, status: false, info: glob.defenceOp7Info},
      { id: glob.defenceOp8, label: glob.defenceOp8Label + String(glob.defenceOp8Cost), cost: glob.defenceOp8Cost, status: false, info: glob.defenceOp8Info},
    ],
    agricultureOptions: [
      { id: glob.agricultureOp1, label: glob.agricultureOp1Label + String(glob.agricultureOp1Cost), cost: glob.agricultureOp1Cost , status: false, info: glob.agricultureOp1Info},
      { id: glob.agricultureOp2, label: glob.agricultureOp2Label + String(glob.agricultureOp2Cost), cost: glob.agricultureOp2Cost , status: false, info: glob.agricultureOp2Info},
      { id: glob.agricultureOp3, label: glob.agricultureOp3Label + String(glob.agricultureOp3Cost), cost: glob.agricultureOp3Cost , status: false, info: glob.agricultureOp3Info},
      { id: glob.agricultureOp4, label: glob.agricultureOp4Label + String(glob.agricultureOp4Cost), cost: glob.agricultureOp4Cost , status: false, info: glob.agricultureOp4Info},
      { id: glob.agricultureOp5, label: glob.agricultureOp5Label + String(glob.agricultureOp5Cost), cost: glob.agricultureOp5Cost , status: false, info: glob.agricultureOp5Info},
      { id: glob.agricultureOp6, label: glob.agricultureOp6Label + String(glob.agricultureOp6Cost), cost: glob.agricultureOp6Cost , status: false, info: glob.agricultureOp6Info},
      { id: glob.agricultureOp7, label: glob.agricultureOp7Label + String(glob.agricultureOp7Cost), cost: glob.agricultureOp7Cost , status: false, info: glob.agricultureOp7Info},
      { id: glob.agricultureOp8, label: glob.agricultureOp8Label + String(glob.agricultureOp8Cost), cost: glob.agricultureOp8Cost , status: false, info: glob.agricultureOp8Info},
    ],
    educationOptions: [
      { id: glob.educationOp1, label: glob.educationOp1Label + String(glob.educationOp1), cost: glob.educationOp1Cost, status: false, info: glob.educationOp1Info},
      { id: glob.educationOp2, label: glob.educationOp2Label + String(glob.educationOp2), cost: glob.educationOp2Cost, status: false, info: glob.educationOp2Info},
      { id: glob.educationOp3, label: glob.educationOp3Label + String(glob.educationOp3), cost: glob.educationOp3Cost, status: false, info: glob.educationOp3Info},
      { id: glob.educationOp4, label: glob.educationOp4Label + String(glob.educationOp4), cost: glob.educationOp4Cost, status: false, info: glob.educationOp4Info},
      { id: glob.educationOp5, label: glob.educationOp5Label + String(glob.educationOp5), cost: glob.educationOp5Cost, status: false, info: glob.educationOp5Info},
      { id: glob.educationOp6, label: glob.educationOp6Label + String(glob.educationOp6), cost: glob.educationOp6Cost, status: false, info: glob.educationOp6Info},
      { id: glob.educationOp7, label: glob.educationOp7Label + String(glob.educationOp7), cost: glob.educationOp7Cost, status: false, info: glob.educationOp7Info},
      { id: glob.educationOp8, label: glob.educationOp8Label + String(glob.educationOp8), cost: glob.educationOp8Cost, status: false, info: glob.educationOp8Info},
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
    let y = x
    if (y < 0)
    {
      y = 1.5*x
    }
    y = this.state.health_perc + y
    this.setState({
      time: this.state.time,
      health_perc: Number(y),
    })
  }

  increaseDef = (x) => {
    let y = x
    if (y < 0)
    {
      y = 1.5*x
    }
    y = this.state.defence_perc + y
    this.setState({
      defence_perc: Number(y),
    })
  }

  increaseAgri = (x) => {
    let y = x
    if (y < 0)
    {
      y = 1.5*x
    }

    y = this.state.agriculture_perc + y
    this.setState({
      agriculture_perc: Number(y),
    })
  }

  increaseEdu = (x) => {
    let y = x
    if (y < 0)
    {
      y = 1.5*x
    }
    y = this.state.education_perc + y
    this.setState({
      education_perc: Number(y),
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
          curFunds = curFunds + c.cost*0.6
          glob.defenceInvst = glob.defenceInvst - c.cost
          this.increaseDef(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            alert("Not enough funds bruh")
            c.status = !c.status
          }
          else
          {
          curFunds = curFunds - c.cost
          glob.defenceInvst = glob.defenceInvst + c.cost
          this.increaseDef(c.cost)
          }
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
          curFunds = curFunds + c.cost*0.6
          glob.healthInvst = glob.healthInvst - c.cost
          this.increaseHealth(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            alert("Not enough funds bruh")
            c.status = !c.status
          }
          else{
          curFunds = curFunds - c.cost
          glob.healthInvst = glob.healthInvst + c.cost
          this.increaseHealth(c.cost)
          }
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
          curFunds = curFunds + c.cost*0.6
          glob.agricultureInvst = glob.agricultureInvst - c.cost
          this.increaseAgri(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            alert("Not enough funds bruh")
            c.status = !c.status
          }
          else{
          curFunds = curFunds - c.cost
          glob.agricultureInvst = glob.agricultureInvst + c.cost
          this.increaseAgri(c.cost)
          }
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
          curFunds = curFunds + c.cost*0.6
          glob.educationInvst = glob.educationInvst - c.cost
          this.increaseEdu(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            alert("Not enough funds bruh")
            c.status = !c.status
          }
          else
          {
          curFunds = curFunds - c.cost
          glob.educationInvst = glob.educationInvst + c.cost
          this.increaseEdu(c.cost)
          }
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
      time: (this.state.total*1000 + this.state.start - Date.now() )/1000
    }), 1);
  }

  updatePerc = () => {

    let health_rate = (100 - this.state.health_perc)*0.6/100
    let defence_rate = (100 - this.state.defence_perc)*0.5/100
    let education_rate = (100 - this.state.education_perc)*0.45/100
    let agriculture_rate = (100 - this.state.agriculture_perc)*0.4/100

    if (isNaN(health_rate))
    {
      alert(this.state.health_perc)
    }

    this.setState({
      health_perc: Number((this.state.health_perc - health_rate).toFixed(1)),
      defence_perc: Number((this.state.defence_perc - defence_rate).toFixed(1)),
      education_perc: Number((this.state.education_perc - education_rate).toFixed(1)),
      agriculture_perc: Number((this.state.agriculture_perc - agriculture_rate).toFixed(1)),
      last: this.state.total - this.state.time,
    })

  }

  updateFund = () => {

    let added_fund = 0.05 * this.state.approval
    added_fund = Number(added_fund.toFixed(1))
    this.setState({
      last_fund: this.state.total - this.state.time,
      curFunds: Number((this.state.curFunds + added_fund).toFixed(2)),
    })
  }

  updateVoter = () => {

    let health_change = this.state.health_perc - this.state.last_health_perc
    let def_change = this.state.defence_perc - this.state.last_defence_perc
    let agri_change = this.state.agriculture_perc - this.state.last_agriculture_perc
    let edu_change = this.state.education_perc - this.state.last_education_perc
    let app_change = (0.6*health_change + 0.4*def_change + 0.2*agri_change + 0.1*edu_change)/2


    // alert(edu_change)
    this.setState({
      last_app: this.state.total - this.state.time,
      approval: Number((this.state.approval + app_change).toFixed(2)),
      last_agriculture_perc: this.state.agriculture_perc,
      last_defence_perc: this.state.defence_perc,
      last_health_perc: this.state.health_perc,
      last_education_perc: this.state.education_perc,
    })
  }

  maxApp = () => {
    this.setState({
      approval: 100,
    })
  }

  minFunds = () => {
    this.setState({
      curFunds: 0,
    })
  }

  scenarios = () => {
    let sc1_flag = this.state.sc1_flag
    let sc2_flag = this.state.sc2_flag
    let sc3_flag = this.state.sc3_flag
    let sc4_flag = this.state.sc4_flag
    let sc5_flag = this.state.sc5_flag
    let sc6_flag = this.state.sc6_flag
    let sc7_flag = this.state.sc7_flag
    let sc8_flag = this.state.sc8_flag

    let sc1_time = this.state.sc1_time
    let sc2_time = this.state.sc2_time
    let sc3_time = this.state.sc3_time
    let sc4_time = this.state.sc4_time
    let sc5_time = this.state.sc5_time
    let sc6_time = this.state.sc6_time
    let sc7_time = this.state.sc7_time
    let sc8_time = this.state.sc8_time

    let x = Math.random()
    if (x > 0.5)
    {
      sc1_flag = false
      let y = Math.random() * this.state.total
      sc1_time = y
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc2_flag = false
      let y = Math.random() * this.state.total
      sc2_time = y
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc3_flag = false
      let y = Math.random() * this.state.total
      sc3_time = y
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc4_flag = false
      let y = Math.random() * this.state.total
      sc4_time = y
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc5_flag = false
      let y = Math.random() * this.state.total
      sc5_time = y
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc6_flag = false
      let y = Math.random() * this.state.total
      sc6_time = y
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc7_flag = false
      let y = Math.random() * this.state.total
      sc7_time = y
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc8_flag = false
      let y = Math.random() * this.state.total
      sc8_time = y
    }

    alert(sc1_time,sc2_time,sc3_time,sc4_time,sc5_time,sc6_time,sc7_time,sc8_time)
    this.setState({
      sc1_flag: sc1_flag,
      sc2_flag: sc2_flag,
      sc3_flag: sc3_flag,
      sc4_flag: sc4_flag,
      sc5_flag: sc5_flag,
      sc6_flag: sc6_flag,
      sc7_flag: sc7_flag,
      sc8_flag: sc8_flag,
      sc1_time: sc1_time,
      sc2_time: sc2_time,
      sc3_time: sc3_time,
      sc4_time: sc4_time,
      sc5_time: sc5_time,
      sc6_time: sc6_time,
      sc7_time: sc7_time,
      sc8_time: sc8_time,
    })
  }

  handleSelectDept = (key) => (event, isExpanded) => {

    if (isExpanded === undefined || isExpanded === true) {
      this.setState({ curDept: key })}
  }

  handleGameOver = (over, id) => {
    this.setState({ isGameOver: true, isDeptOverId: id, overId: over})
  }

  scene1 = () => {
    alert("woah man")
    this.setState({
      sc1_flag: true,
    })
  }

  componentDidMount() {
    if(!this.state.isGameOver)
    {
      this.setState({
        total: this.state.term,
        approval: this.state.startApproval,
      })
      // this.scenarios()
      this.startTimer()
    }
 }
    render() {
      // console.log(this.state.term, this.state.startApproval, this.state.minApproval, this.state.mode)
      // alert(this.state.curfunds)
      // alert(this.state.time)

      let skills_health = undefined
      let skills_defense = undefined
      let skills_agr = undefined
      let skills_edu = undefined

      if(!this.state.isGameOver)
      {
        if ((this.state.total - this.state.time) - this.state.last > 1 && (this.state.total - this.state.time) > 5)
        {
          this.updatePerc()
        }

        if ((this.state.total - this.state.time) - this.state.last_fund > 20 && (this.state.total - this.state.time) > 5)
        {
          this.updateFund()
        }

        if ((this.state.total - this.state.time) - this.state.last_app > 1 && (this.state.total - this.state.time) > 5)
        {
          this.updateVoter()
        }

        if (this.state.approval > 100)
        {
          this.maxApp()
        }

        if (this.state.curFunds < 0)
        {
          this.minFunds()
        }

        skills_health = [
          {type: "Health", level: this.state.health_perc, color: {bar: this.state.health_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];
        skills_defense = [
          {type: "Defense", level: this.state.defence_perc, color: {bar: this.state.defence_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];
        skills_agr = [
          {type: "Agriculture", level: this.state.agriculture_perc, color: {bar: this.state.agriculture_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];
        skills_edu = [
          {type: "Education", level: this.state.education_perc, color: {bar: this.state.education_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];

        if (this.state.time < 0 )
        {
          this.handleGameOver(glob.timeOver, -1)
        }
        if (this.state.approval < this.state.minApproval )
        {
          this.handleGameOver(glob.approvalOver, -1)
        }
        if(this.state.health_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver, glob.healthId)
        }
        if( this.state.defence_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver, glob.defenceId)
        }
        if(this.state.education_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver, glob.educationId)
        }
        if(this.state.agriculture_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver,glob.agricultureId)
        }
      }

      // if (this.state.sc1_flag)
      // <div style={{color:'white'}}>
      //  Current funding : {(this.state.curFunds).toFixed(2)}
      //  Time left : {Math.ceil(this.state.time)}
      //  Approval : {this.state.approval}
      //  health_perc : {this.state.health_perc}
      //  defence_perc : {this.state.defence_perc}
      //  agriculture_perc : {this.state.agriculture_perc}
      //  education_perc : {this.state.education_perc}</div>
      let Playing = undefined

      if (!this.state.isGameOver)
      {
        Playing = <div className="gamespace">
        <Sound
        url="./song.mp3"
        playStatus={Sound.status.PLAYING}
        playbackRate= {1}
        autoLoad = {true}
        loop = {true}
        volume = {70}
        onLoad={() => console.log('Loaded')}
        onPlaying={({ position }) => console.log('Position', position)}
        />

        <NavBar />

        <Container fluid style={{ paddingLeft: 15, paddingRight: 25}}>
        <Row noGutters className="justify-content-md-center "  style={{top: '20rem'}}>

        <Col xs={{ span: 4, offset: 1 }} md={{ span: 3, offset: 0 }} style={{ paddingTop: 100}}>
        <SkillBar skills={skills_health}  height={40} width={60} style={{ paddingTop: 1 }}/>
        <div style={{ paddingTop: 20 }}><SkillBar skills={skills_defense}  height={40} width={55} /></div>
        <div style={{ paddingTop: 20 }}><SkillBar skills={skills_agr}  height={40} width={55} /></div>
        <div style={{ paddingTop: 20 }}><SkillBar skills={skills_edu}  height={40} width={55} /></div>
        </Col>

        <Col xs={{ span: 7, offset: 2 }} md={{ span: 5, offset: 1 }} style={{ paddingTop: 60}}>


        <Card bg='light'

        text= 'dark'
        style={{ width: '30rem' }}
        className="mb-2">
        <Card.Header>Welcome Mr.Prime Minister!</Card.Header>
        <Card.Body>
        <Card.Title>Mid-weekly reports</Card.Title>
        <Card.Text>
        <div >
        <div> Current funding : {this.state.curFunds.toFixed(2)} trillion rupees </div>
        <div> Time left : {Math.ceil(this.state.time) /2 } weeks </div>
        </div>
        </Card.Text>
        </Card.Body>
        </Card>
        <Card bg='dark'
        text= 'white'
        style={{ width: '30rem' }}
        className="mb-2">
        <Card.Header>Voter Approval:</Card.Header>
        <Card.Body>
        <Card.Text>
        <div >
        <PieChart
        data={[
          { title: this.state.approval , value: this.state.approval , color: '#00b300' },
          { title: 100 - this.state.approval , value: 100 - this.state.approval, color: '#ff1a1a'},
        ]}
        radius= {45}
        center = {[80,45]}
        viewBoxSize = {[170, 100]}

        />
        </div>
        </Card.Text>
        </Card.Body>
        </Card>

        </Col>

        <Col xs={{ span: 2, offset: 2 }} md={{ span: 2, offset: 1 }} style={{ paddingTop: 10}}>

        {this.state.depts.map(el =>
          <AccordionElement
          id={el.id}
          label={el.label}
          info={el.info}
          curDept={this.state.curDept}
          options={this.getOptions(el.id)}
          changeButtonStatus = {this.changeButtonStatus}
          onSelectOption={this.handleSelectDept}
          />
        )}

        </Col>
        </Row>
        </Container>
        </div>

      }
      else
      {
        alert(this.state.overId)
      }


      return (
          <React.Fragment>
          {Playing}


          </React.Fragment>
        );
    }
}

export default GameSpace;
