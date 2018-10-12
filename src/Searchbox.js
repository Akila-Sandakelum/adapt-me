import React from "react";
import { ANIMALS } from "petfinder-client";
import { connect } from "react-redux";
/* import {
  changeAnimal,
  changeBreed,
  changeLocation,
  getBreeds
} from "./actionCreators"; */
import changeAnimal from "./actionCreators/changeAnimal";
import changeLocation from "./actionCreators/changeLocation";
import changeBreed from "./actionCreators/changeBreed";
import getBreeds from "./actionCreators/getBreeds";

class SearchBox extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Location
            <input
              onChange={this.props.handleLocationChange}
              id="location"
              value={this.props.location}
              placeholder="location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={!this.props.breeds.length}
            >
              <option />
              {this.props.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  animal,
  location
});

const mapDispatchToProps = dispatch => {
  return {
    handleAnimalChange(event) {
      dispatch(changeAnimal(event.target.value));
      dispatch(getBreeds());
    },
    handleLocationChange(event) {
      dispatch(changeLocation(event.target.value));
    },
    handleBreedChange(event) {
      dispatch(changeBreed(event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
