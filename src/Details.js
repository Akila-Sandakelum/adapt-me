import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";
import Loadable from "react-loadable";
import Carousel from "./Carousel";
import Modal from "./Modal";

const petfinder = pf({
  key: "d9a488ece7b73b809ceb4c3555372d27",
  secret: "c43753cd5a2dddda900dd88dc34bcb45"
});

const loading = () => <h1>loading...</h1>;

const LoadableContent = Loadable({
  loader: () => import("./AdoptModalContent"),
  loading
});

class Details extends React.Component {
  state = {
    loading: true,
    showModal: false
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  componentDidMount() {
    petfinder.pet
      .get({ output: "full", id: this.props.id })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = [pet.breeds.breed];
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          media: pet.media,
          description: pet.description,
          breed,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ error: err });
        navigate("/");
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }
    const {
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1> {name}</h1>
          <h2>
            {animal} - {breed} -{location}
          </h2>
          <button onClick={this.toggleModal}>Adapt {name}</button>
          <p> {description} </p>
        </div>
        {showModal ? (
          <Modal>
            <LoadableContent toggleModal={this.toggleModal} name={name} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Details;
