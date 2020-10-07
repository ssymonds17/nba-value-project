import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }

  componentDidMount() {
    let playerID = window.location.pathname;
    console.log(playerID);
    this.getPlayerData(playerID);
  }

  getPlayerData = (playerID) => {
    axios.get(`https://nba-value-reference.herokuapp.com${playerID}`)
      .then((response) => {
        this.setState({
          player: response.data
        });
      })
      .catch(() => {
        alert('data has not been received');
      })
  }

  render() {
    const { player } = this.state;
    return (
      <div>
        {player.map(player => (
          <p>{player.name}</p>
        ))}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn how to React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
