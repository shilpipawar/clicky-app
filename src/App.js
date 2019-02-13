import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import picture from "./pictures.json";
import logo from "./logo.svg"
import './App.css';
class App extends Component {
  state = {
    picture,
    numberofclicks: [],
    score: 0,
    top_score: 0,
    message: "START!!"
  };
  //Picture Click event
  clickOnPicture = id => {
    if (this.state.numberofclicks.includes(id)) {
      this.setState({
        score: 0,
        numberofclicks: [],
        message: "Incorrect Click!! Game Over, Click image to restart game"
      })
    } else {
      this.setState({
        score: this.state.score + 1,
        numberofclicks: this.state.numberofclicks.concat([id]),
        message: "Correct!!"
      })
    }

  }//function end
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky Game</h1>
        </header>
        <h3 className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!</strong>
          <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        <Wrapper>
          {this.state.picture.map(picture => (
            <PictureCard
              clickOnPicture={this.clickOnPicture}
              id={picture.id}
              key={picture.id}
              image={picture.image}
            />
          ))}
        </Wrapper>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">&copy;Shilpa Pawar</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
