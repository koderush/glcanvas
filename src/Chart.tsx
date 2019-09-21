import React from "react";
import ChartGL from "./ChartGL";

type ChartProps = {
  id: string;
};

class Chart extends React.Component<ChartProps> {
  id: string = this.props.id;
  width: number = 0;
  height: number = 480;
  ref = React.createRef<HTMLDivElement>();

  wgl: any;

  componentDidMount() {
    const node = this.ref.current;

    if (node) {
      this.width = node.offsetWidth;
      this.height = node.offsetHeight;
    }

    const glCanvas: any = document.querySelector(`#glCanvas${this.id}`);

    if (glCanvas === null) {
      console.log("Cannot find #glCanvas");
      return;
    }

    // Initialize the GL context
    this.wgl = glCanvas.getContext("webgl");

    const gl = this.wgl as WebGLRenderingContext;

    const cgl : ChartGL = new ChartGL(gl);
    
    if (gl === null) {
      console.log("Cannot initialize the GL context");
      return;
    }

    // Set clear color to black, fully opaque
    switch (this.id) {
      case "1": {
        cgl.render();
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
    return (
      <canvas
        id={`glCanvas${this.id}`}
        width={this.width}
        height={this.height}
        style={{ width: "99.5%", border: "1px solid red" }}
      ></canvas>
    );
    // return <p> Item # {`${this.id}`}</p>;
  }
}

export default Chart;
