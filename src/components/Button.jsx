import React, { Component } from 'react';


class Button extends Component {

    render() {
        let classes = "btn btn-sm m-2 btn-";

        // alert(this.props.el.status)
        if(this.props.el.status === false)
        {
          classes += "dark";
        }
        else {
          classes +=  "primary";
        }

        return (
          <React.Fragment>
          <button
            className={classes}
            onClick={() => this.props.onSelectOption(this.props.el)}
          >
              {this.props.el.label}
          </button>
          </React.Fragment>
        );
    }
}

export default Button;
