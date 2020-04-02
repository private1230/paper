import React from "react";
import Popup from "./Components/Popup";
import AI from "./Components/AI";
import { FaHandScissors, FaFistRaised, FaHandPaper } from "react-icons/fa";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0,
      computer: 0,
      playerValue: "",
      computerValue: "",
      winner: "",
      prechoice: "",
      showPopup: false,
      choice : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {

    let playerValue = id
    let computerValue = this.getComputerChoice();
    let winner = this.getWinner(playerValue, computerValue);
    this.whoWon(winner);
    this.setState({
      prechoice : computerValue,
      computerValue,
      playerValue,
      winner,
      showPopup: !this.state.showPopup,
      choice: false
    });
    setTimeout(() => {
      this.setState({
        showPopup: false
      });
     }, 4300);
    }
 
  pop()
{
  setTimeout(() => {  
    this.setState({
      choice: true
    }); 
  },3050) 
}



  whoWon(winner) {
    if (winner === "player") {
      this.setState(state => {
        return { player: state.player + 1 };
      });
    } else if (winner === "computer") {
      this.setState(state => {
        return { computer: state.computer + 1 };
      });
    }
  }
  getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
      return "rock";
    } else if (rand <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  // Get game winner
  getWinner(p, c) {
    if (p === c) {
      return "draw";
    } else if (p === "rock") {
      if (c === "paper") {
        return "computer";
      } else {
        return "player";
      }
    } else if (p === "paper") {
      if (c === "scissors") {
        return "computer";
      } else {
        return "player";
      }
    } else if (p === "scissors") {
      if (c === "rock") {
        return "computer";
      } else {
        return "player";
      }
    }
  }


    
  
  render() {

    return (
      <>

          <div class="container mt-3">
<div class="d-flex justify-content-center bg-secondary mb-3">
    <div class="p-2">
    <header className="header">
            <h1>Rock Paper Scissors</h1>
            <button id="restart" className="restart-btn">
              Restart Game
            </button>
            <div id="score" className="score">
              <p>Player: {this.state.player}</p>
              <p>Computer: {this.state.computer}</p>
            </div>
          </header>

          <h2>Make Your Selection</h2>
          <h3 > PLAYER </h3>
          <br></br>

          </div>       
       </div>
        </div>


          <div class="container-fluid">
  <div class="row">
  <div className="choices">
    <div class="col-4"><div id="rock" className="choice" onClick={() => this.handleClick('rock')}>
              <FaFistRaised className = "FaHand"/>
            </div></div>
    <div class="col-4]"> <div id="paper" className="choice" onClick={() => this.handleClick('paper')}>
              <FaHandPaper className = "FaHand"/>
            </div></div>
    <div class="col-4"><div id="scissors" className="choice" onClick={() => this.handleClick('scissors')}>
              <FaHandScissors className = "FaHand"/>
            </div></div>
           
            </div>
  </div>
</div>
      

<div class="container mt-3">
<div class="d-flex justify-content-center bg-secondary mb-3">
    <div class="p-5S"> 
<br></br>
<div style ={{textAlign:"center"}}> <h3> AI </h3></div>
<br></br>

  </div>
  </div>
  </div>


<div class="container mt-3">
<div class="d-flex justify-content-center bg-secondary mb-3">
    <div class="p-2  ">  <div > {this.state.showPopup ?<AI  prechoice ={ this.state.prechoice} choice={this.state.choice}/>: null}</div>
    </div>

  </div>
  </div>

        {this.pop()}
             {this.state.showPopup && this.state.choice === true ? 
             (<Popup
             playerChoice={this.state.playerValue}
             computerChoice={this.state.computerValue}
             winner={this.state.winner}/>): null
             }
    
        
      </>
    );
  }
}

export default App;
