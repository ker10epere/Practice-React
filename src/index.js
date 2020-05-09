import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  state = { lat: null, errorMessage: '' }

  // Calls when apps started => Similar to constructor
  // Should contains only loading files
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  renderContent() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please allow us to get your location" />
  }

  render() {
    // className is just an example to give a border to whatever renderContent
    return <div className="border red">
      {this.renderContent()}
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))