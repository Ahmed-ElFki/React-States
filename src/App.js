import React from "react";
import profilePIC from "./PP.jpg";
import "./Profile.css";

class App extends React.Component {
  state = {
    Person : {
      fullName : "ELFKI Ahmed",
      bio : "A work in progress...", 
      imgSrc : profilePIC, 
      profession : "Analyste Fonctionnel SIRH"
    },
    show : true
  };

  viewUpdate = () => {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div className="Root">
        <button className="Make-me-pretty" onClick={this.viewUpdate}>I am a Wizard !</button>
        <div className="App" style={{display: (this.state.show) ? "flex" : "none"}}>
          <img src={this.state.Person.imgSrc} alt="Profile PIC" />
          <div className="data">
            <p>
              <span>Full Name</span> : {this.state.Person.fullName}
            </p>
            <p>
              <span>Bio</span> : {this.state.Person.bio}
            </p>
            <p>
              <span>Profession</span> : {this.state.Person.profession}
            </p>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
