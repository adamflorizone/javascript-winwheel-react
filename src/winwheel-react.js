import WinwheelJS from 'javascript-winwheel'
import React from "react";
  
export default class Winwheel extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  spin(){      
    this.wjs.stopAnimation();
    this.wjs.rotationAngle = this.wjs.rotationAngle % 360;
    this.wjs.draw();
    this.wjs.startAnimation();
  }
  
  componentDidUpdate(){
    const canvas = this.canvasRef.current;

    /*this.wjs.setCenter(null,null);
    this.wjs.setOuterRadius(null);
    this.wjs.updateCenter();

    this.wjs.setSegments(this.props.segments);*/

    this.wjs.setOptions(Object.assign({canvas:canvas,rotationAngle:this.wjs.rotationAngle},this.props),true);

    //this.wjs.draw(true);
  }
  componentDidMount() {
    // const { width } = this.props;
    const canvas = this.canvasRef.current;
    this.wjs=new WinwheelJS(Object.assign({canvas:canvas},this.props));
  }

  updateAnimationState() {
    //this.setState(prevState => ({ angle: prevState.angle + 1 }));
    //this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
   //  cancelAnimationFrame(this.rAF);
  }

  render() {
    return React.createElement(
      "canvas",
      {
        className:this.props.className, 
        width:this.props.width, 
        height:this.props.height,
        ref: this.canvasRef
      },
      'Canvas not supported, use another browser.'
    )
  }
}