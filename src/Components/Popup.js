import React from "react";
import "../App.css";

class Popup extends React.Component {
  render() {

    return (
      
      <div className="popup">
        <div className="popup_inner">
          <p>Player Choice: {this.props.playerChoice}</p>
          <p>Computer Choice: {this.props.computerChoice}</p>
          {this.props.winner === "computer"?
           <div className = "text-lose"> <p>Winner: {this.props.winner}</p>
           </div>
           : (this.props.winner === "player") ?<div className = "text-win"> <p>Winner: {this.props.winner}</p>
           </div>
           : <div className = "text-draw"> <p>Winner: {this.props.winner}</p>
           </div>
           
           }

        </div>
      </div>
    );
  }
}

export default Popup;
