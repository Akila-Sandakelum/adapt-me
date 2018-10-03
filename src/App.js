import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// Class components
class App extends React.Component {
  handleOnClick() {
    alert("You clicked the title");
  }

  render() {
    /* return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleOnClick }, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanees"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockteil"
      }),
      React.createElement(Pet, {
        name: "Meuw Meuw",
        animal: "Cat",
        breed: "Persion"
      })
    ]); */
    return (
      <div>
        <h1 onClick={this.handleOnClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havaneese" />
        <Pet name="Pepper" animal="Bird" breed="Cockteil" />
        <Pet name="Meuw Meuw" animal="Cat" breed="Persion" />
      </div>
    );
  }
}

// Stateless functional components

/* const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adopt Me!'),
        React.createElement(Pet, {
            name: 'Luna',
            animal: 'Dog',
            breed: 'Havanees'
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'Cockteil'
        }),
        React.createElement(Pet, {
            name: 'Meuw Meuw',
            animal: 'Cat',
            breed: 'Persion'
        })
    ]
    );
} */

render(React.createElement(App), document.getElementById("root"));
