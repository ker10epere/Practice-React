import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { latitude: null, errorMessage: '', position: 'Loading...' }
  // Calls when apps started => Similar to constructor
  // Should contains only loading files
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  // Calls when State is updated
  componentDidUpdate() {
    console.log('Update')
  }

  componentWillUnmount() {
    console.log('Unmount')
  }

  render() {
    if (!this.state.errorMessage) {
      return (<div>
        <h1>Latitude:{!this.state.latitude ? this.state.position : this.state.latitude} </h1><br />

      </div>)
    }
    else {
      return <div>Error: {this.state.errorMessage}</div>
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))