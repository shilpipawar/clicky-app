import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import picture from "./pictures.json";
// import logo from "./logo.svg"
import './App.css';
class App extends Component {
  // Setting this.state.picture to the picture json array
  state = {
    picture
  };
  // Map over this.state.picture and render a pictureCard component for each picture object
  render() {
    return (
      <div className="App">
      <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React Clicky Game!!</h1>
        </header>
        <h3 className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        <Wrapper>
        {this.state.picture.map(picture => (
          <PictureCard
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
