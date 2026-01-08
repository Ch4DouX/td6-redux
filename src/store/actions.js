// types d'actions
export const ADD_PERSON = "ADD_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";

// action pour ajouter une personne
export const addPerson = (person) => ({
  type: ADD_PERSON,
  payload: person,
});

// action pour supprimer une personne
export const deletePerson = (id) => ({
  type: DELETE_PERSON,
  payload: id,
});

// action pour modifier une personne
export const updatePerson = (id) => ({
  type: UPDATE_PERSON,
  payload: id,
});
