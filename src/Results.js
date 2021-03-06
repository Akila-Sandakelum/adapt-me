import React from "react";
import pf from "petfinder-client";
import { Consumer } from "./SearchContext";
import Pet from "./Pet";
import Searchbox from "./Searchbox";

const petfinder = pf({
  key: "d9a488ece7b73b809ceb4c3555372d27",
  secret: "c43753cd5a2dddda900dd88dc34bcb45"
});
// Class components
class Results extends React.Component {
  // Required constructor with props
  // Super keyword is a must to pass up the props
  constructor(props) {
    super(props);

    // Initialize the state in the constructor
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.search();
  }

  search = () => {
    // Making API call and retrieve the data back and populare pets array
    petfinder.pet
      .find({
        output: "full",
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        //  Shallowcopping
        this.setState({
          pets
        });
      });
  };

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
      <div className="search">
        <Searchbox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }

          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
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

// If we want to access context within react lifecycle methods we have to
// write the <Consumer> as below. Otherwise we can directly use the <Consumer>
// inside the render method as if we have done in <SearchBox> component
export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
