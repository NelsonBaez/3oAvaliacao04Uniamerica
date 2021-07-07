import axios from 'axios';
import React, { Component, useEffect } from 'react';

class App extends Component {

  state = {
    piadas: [],
  }

  async componentDidMount() {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=5");
    console.log(response);
    this.setState({ piadas: response.data.jokes });
  }

  render() {
    const { piadas } = this.state;
    return (
      <div>
        <h1>Piadas:</h1>
        {piadas.map(piada => (
          <li key={piada.id}>
            <h2>
              {piada.setup}
            </h2>
            <p>
              {piada.delivery}
            </p>
          </li>
        ))}
      </div>
    );
  };
};

export default App;