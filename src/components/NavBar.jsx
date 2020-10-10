import React, { Component } from 'react';

class NavBar extends Component {

    state={
        news:[
          "NEWS Item 1 ",
          "NEWS Item 2 ",
          "NEWS Item 3 ",
          "NEWS Item 4 ",
          "NEWS Item 5 ",
          "NEWS Item 6 ",
          "NEWS Item 7 ",
          "NEWS Item 8 ",
          "NEWS Item 9 ",
          "NEWS Item 10 "
        ]
    }

    shouldComponentUpdate(){
        return false;
    }

    render() {
      let NEWS = this.state.news.join("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0");
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <marquee style={{color: 'white'}}> {NEWS} </marquee>
            </nav>
        );
    }
}

export default NavBar;
