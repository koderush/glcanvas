import React from "react";
type ChartProps = {
  id: string;
};

class Chart extends React.Component<ChartProps> {
  id = this.props.id;

  wgl: any;

  componentDidMount() {
    const glCanvas: any = document.querySelector(`#glCanvas${this.id}`);

    if (glCanvas === null) {
      console.log("Cannot find #glCanvas");
      return;
    }

    // Initialize the GL context
    this.wgl = glCanvas.getContext("webgl");

    const gl = this.wgl as WebGLRenderingContext;
    
    if (gl === null) {
      console.log("Cannot initialize the GL context");
      return;
    }

    // Set clear color to black, fully opaque
    switch (this.id) {
      case "1": {
        gl.clearColor(1.0, 0.0, 0.0, 1.0);
        break;
      }
      case "2": {
        gl.clearColor(0.0, 1.0, 0.0, 1.0);
        break;
      }
      case "3": {
        gl.clearColor(0.0, 0.0, 1.0, 1.0);
        break;
      }
      case "4": {
        gl.clearColor(0.0, 1.0, 1.0, 1.0);
        break;
      }
      default: {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
      }
    }

    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  render() {
    return <canvas id={`glCanvas${this.id}`} width={150} height={480}></canvas>;
  }
}

export default Chart;
