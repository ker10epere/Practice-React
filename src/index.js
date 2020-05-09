import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { latitude: null, errorMessage: '', position: 'Loading...' }



  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (err) => this.setState({ errorMessage: err.message })
    )
  }
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