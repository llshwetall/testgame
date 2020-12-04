import React, { Component } from 'react';
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class Button extends Component {

    render() {
        let classes = "btn btn-sm m-2 btn-";

        // alert(this.props.el.status)
        let displayInfo = undefined
        if(this.props.col === false)
        {
          classes += "dark";
          displayInfo = this.props.el.info
        }
        else {
          classes +=  "success";
          displayInfo = "If you choose to recall this policy, you will get back 60% of the funds back, but it will affect the department negatively"
        }

        return (
          <React.Fragment>
          <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip" {...this.props}>
            {displayInfo}
            </Tooltip>
          }
          >
          <button
          style={{ width:'10rem', fontSize: '11px', marginBottom: 0}}
          className={classes}
          onClick={() => this.props.onSelectOption(this.props.el)}
          >
          {this.props.el.label}
          </button>
          </OverlayTrigger>
          </React.Fragment>
        );
    }
}

export default Button;
