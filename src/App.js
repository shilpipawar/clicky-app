import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import picture from "./pictures.json";

class App extends Component {
  // Setting this.state.picture to the picture json array
  state = {
    picture
  };

  removePicture = id => {
    // Filter this.state.picture for picture with an id not equal to the id being removed
    const picture = this.state.picture.filter(picure => picture.id !== id);
    // Set this.state.picture equal to the new picture array
    this.setState({ picture });
  };

  // Map over this.state.picture and render a pictureCard component for each picture object
  render() {
    return (
      <Wrapper>
        {this.state.picture.map(picture => (
          <PictureCard
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
