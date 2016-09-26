
let {PropTypes: types} = React

class App extends React.Component {
  static start() {
    ReactDOM.render(<App />, document.getElementById("page"))
  }

  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    const css = `
      @font-face {
        font-family: "terminus";
        src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
      }

      .svg_container button {
        border: 2px solid white;
        color: #666;
        background: #eee;
        border-radius: 2px;
        font-family: terminus;
        padding: 2px 4px;
      }

      .svg_container {
        padding: 10px;
        box-sizing: border-box;
        background: #999;
        width: 100%;
        height: 100%;
      }

      .svg_container .frame {
        background-color: #408af6;
        background-image: -webkit-linear-gradient(bottom, #277bf5 0%, #5899F7 100%);
        color: #fff;
        border: 2px solid #fff;
        border-radius: 2px;
        padding: 5px;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1), inset 0 2px 1px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
      }

      .svg_container .canvas_bar {
        position: relative;
        padding-top: 4px;
        padding-left: 5px;
        padding-right: 5px;
      }

      .svg_container .canvas_bar_label {
        position: absolute;
        bottom: 0;
        z-index: 1;
        left: 10px;
        text-shadow: -1px -1px 0 #48505A, 1px 1px 0 #48505A, -1px 1px 0 #48505A, 1px -1px 0 #48505A, 1px 0px 0 #48505A, -1px 0px 0 #48505A, 0px 1px 0 #48505A, 0px -1px 0 #48505A;
      }

      .svg_container .canvas_bar_track {
        height: 5px;
        box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.4);
        transform: skewX(-45deg);
        background: #463333;
      }

      .svg_container .canvas_bar_inner {
        background-color: #ff5d5d;
        background-image: -webkit-linear-gradient(bottom, #ff5151 0%, #FF6A6A 100%);
        box-shadow: 0 0 0 1px #FFE7E7;
        height: 5px;
      }
    `;

    let buttons = []

    for (let i = 1; i < 15; i++) {
      buttons.push(<CanvasButton key={i}>X</CanvasButton>)
    }

    return <HtmlCanvas width={250} height={250} scale={3}>
      <div style={{
        fontSize: "11px",
        fontFamily: "terminus"
      }}>
        <style type="text/css">{css}</style>
        <h1 style={{
          fontSize: "20px",
          fontWeight: "normal",
          margin: "0"
        }}>Hello from buffer</h1>
        <p>This is my text</p>
        <div className="frame" style={{ textAlign: "center" }}>
          {buttons}
        </div>
        <div className="frame" style={{ textAlign: "center" }}>
          <CanvasBar p={0.75}>HP: 7/10</CanvasBar>
        </div>
      </div>
    </HtmlCanvas>
  }
}


class HtmlCanvas extends React.Component {
  static propTypes = {
    width: types.number.isRequired,
    height: types.number.isRequired,
    scale: types.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
    this.renderToCanvas()

    const node = ReactDOM.findDOMNode(this)

    let drawNextFrame = false;
    node.addEventListener("html_canvas:redraw", () => {
      if (drawNextFrame) { return }
      drawNextFrame = true

      window.requestAnimationFrame(() => {
        drawNextFrame = false
        this.renderToCanvas()
      })
    })
  }

  renderToCanvas() {
    const start = +new Date
    const el = this.refs.buffer
    const html = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.props.width}" height="${this.props.height}">
      <foreignObject width="100%" height="100%">
        ${el.innerHTML}
      </foreignObject>
    </svg>`

    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")

    const img = new Image
    const svg = new Blob([html], {
      type: "image/svg+xml;charset=utf-8"
    })

    const url = window.URL.createObjectURL(svg)

    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)
      window.URL.revokeObjectURL(url)
      // console.log("frame time", +new Date - start)
    }

    img.src = url
  }

  render() {
    return <div
      style={{
        position: "relative",
        width: this.props.width * this.props.scale + "px",
        height: this.props.height * this.props.scale + "px",
      }}
      className="html_canvas">

      <canvas ref="canvas"
        style={{ 
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        width={this.props.width}
        height={this.props.height}></canvas>

      <div className="buffer" ref="buffer" style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: `${this.props.width}px`,
        height: `${this.props.height}px`,
        transform: `scale(${this.props.scale}, ${this.props.scale})`,
        transformOrigin: "top left",
        opacity: "0"
      }}>
        <div xmlns="http://www.w3.org/1999/xhtml" className="svg_container">
          {this.props.children}
        </div>
      </div>
    </div>
  }
}

// trigger event to redraw when anything happens
class CanvasElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
    this.triggerRedraw()
  }

  componentDidUpdate() {
    this.triggerRedraw()
  }

  triggerRedraw(...args) {
    const node = ReactDOM.findDOMNode(this)
    let ev = new CustomEvent("html_canvas:redraw", {
      detail: args,
      bubbles: true
    })
    node.dispatchEvent(ev)
  }
}

class CanvasButton extends CanvasElement {
  componentDidMount() {
    this.mouseup = () => { this.setState({ pressed: false }) }
    document.body.addEventListener("mouseup", this.mouseup)
    super.componentDidMount()
  }

  componentWillMount() {
    document.body.removeEventListener("mouseup", this.mouseup)
  }

  render() {
    return <button
      className="canvas_button"
      style={{
        margin: "2px",
        boxShadow: this.state.hover ? "0 0 0 2px #666" : null,
        backgroundColor: this.state.pressed ? "#ddd" : null
      }}
      onMouseDown={() => {
        this.setState({ pressed: true })
      }}
      onMouseEnter={() => {
        this.setState({
          hover: true
        })
      }}
      onMouseLeave={() => {
        this.setState({
          hover: false
        })
      }}
      onClick={this.props.onClick}>
      {this.props.children}
    </button>
  }
}


class CanvasBar extends CanvasElement {
  static propTypes = {
    p: types.number.isRequired,
  }

  render() {
    return <div className="canvas_bar">
      <div className="canvas_bar_label">{this.props.children}</div>
      <div className="canvas_bar_track">
        <div className="canvas_bar_inner" style={{
          width: `${this.props.p * 100}%`
        }}></div>
      </div>
    </div>
  }
}


