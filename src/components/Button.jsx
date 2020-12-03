import React, { Component } from 'react';
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class Button extends Component {

    render() {
        let classes = "btn btn-sm m-2 btn-";

        // alert(this.props.el.status)
        if(this.props.col === false)
        {
          classes += "dark";
        }
        else {
          classes +=  "success";
        }

        return (
          <React.Fragment>
          <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip" {...this.props}>
            {this.props.el.info}
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
