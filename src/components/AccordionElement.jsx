import React, { Component, useContext } from 'react';
import glob from './global.jsx'
import Button from './Button.jsx'
import Card from 'react-bootstrap/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Overlay from 'react-bootstrap/Overlay'

class AccordionElement extends Component {

  state = {
    // options : undefined,
  }

  constructor(props) {
    super(props);
    // this.state.options = this.props.options;

  }

  shouldComponentUpdate(nextProps, nextState) {

  }


  render() {

    let classes = "btn btn-sm btn-block btn-";


    return (
      <Card style={{ width: '10rem'}}>
      <Accordion
      >
      <AccordionSummary
      aria-controls="panel1bh-content"
      id="panel1bh-header"
      >
      <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip id="button-tooltip" {...this.props}>
        {this.props.info}
        </Tooltip>
      }
      >
      <div className={classes}>{this.props.label}</div>
      </OverlayTrigger>

      </AccordionSummary>

      <AccordionDetails >
      <div>
      {this.props.options.map(
        el => <Button key={el.id} el={el} onSelectOption={this.props.changeButtonStatus} />
      )}
      </div>
      </AccordionDetails>
      </Accordion>
      </Card>

    )

  }

}

export default AccordionElement;
