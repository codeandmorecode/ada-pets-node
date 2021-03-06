// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("An error has occurred.")
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
      // Fill out as part of Wave 2.
      axios.get(BASE_URL + selectedPetId)
        .then((response) => {
          setResult(response.data);
        })
        .catch((error) => {
          setError("The request has failed (404 error).");
        });
      }
    };

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult("You successfully removed the pet from the listing", response.data);
    })
    .catch((error) => {
      setError("The request to remove pet has failed.");
    });
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  const reqData = {name: petInfo.name, ...petInfo.options};
  axios.post(BASE_URL, reqData)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("The request to add a pet has failed.");
  });
};



// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
