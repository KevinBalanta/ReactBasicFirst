import React, { Component } from 'react';
import './App.css';
import './components/GameList'
import GameList from './components/GameList';
import GameForm from './components/GameForm';

class App extends Component{

  constructor(){
    super();
    
    this.state = {
      owner: "Kevin",
      games: [
        {id: 1, name: "Super Mario", type: "Arcade", price: "30000"},
        {id: 2, name: "Call of Duty", type: "FPS", price: "100000"},
        {id: 3, name: "Halo", type: "FPS", price: "50000"}
      ]
    }
  }

  handleAddGame(game){
    let games = this.state.games;
    games.push(game);
    this.setState({
        games: games
    })
}


  render(){
  return (
    <div className="container">
      <GameList games={this.state.games} owner={this.state.owner}/>
      <GameForm onSubmit={this.handleAddGame.bind(this)} />
    </div>
  );
}
}

export default App;
