import React, { Component} from "react";
import {hot} from "react-hot-loader";


  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

  
    render() {
      return (
        
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}

          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>

          {this.props.render(this.state)}

          
        </div>

      );
    }
  }
  

  export default hot(module)(Mouse);