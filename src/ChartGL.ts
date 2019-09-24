export default class ChartGL {
  gl: WebGLRenderingContext;
  constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
  }

  render(): void {
    this.gl.clearColor(0.8, 0.1, 0.1, 1.0);
  }
}
