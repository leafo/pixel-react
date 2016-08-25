
class App extends React.Component {
  static start() {
    ReactDOM.render(<App />, document.getElementById("page"));
  }

  render() {
    return <div>
      <h1>Hello world</h1>
    </div>
  }
}
