import React from "react";
import { FaHandScissors, FaFistRaised, FaHandPaper } from "react-icons/fa";
import "../App.css";

class AI extends React.Component {
  render() {

    return (      
        <div>
            {this.props.prechoice === "rock" ?<div>
          <FaFistRaised className = "FaHand" />
        </div> : null}

        {this.props.prechoice === "paper" ?<div>
          <FaHandPaper className = "FaHand"/>
        </div> : null}

        {this.props.prechoice === "scissors" ?<div>
          <FaHandScissors className = "FaHand" />
        </div> : null}
        </div>
     
    );
  }
}

export default AI;
