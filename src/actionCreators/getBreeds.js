import pf from "petfinder-client";

const petfinder = pf({
  key: "d9a488ece7b73b809ceb4c3555372d27",
  secret: "c43753cd5a2dddda900dd88dc34bcb45"
});

export default function getBreeds() {
  return function(dispatch, getState) {
    const { animal } = getState();
    petfinder.breed.list({ animal }).then(data => {
      let breeds = [];
      if (
        data.petfinder &&
        data.petfinder.breeds &&
        Array.isArray(data.petfinder.breeds.breed)
      ) {
        breeds = data.petfinder.breeds.breed;
      }
      dispatch({ type: "SET_BREEDS", payload: breeds });
    });
  };
}
