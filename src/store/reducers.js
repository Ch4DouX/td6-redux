import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from "./actions";

const initialState = {
  people: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        people: [...state.people, action.payload],
      };

    case DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
      };

    case UPDATE_PERSON:
      return {
        ...state,
        people: state.people.map((person) =>
          person.id === action.payload
            ? { ...person, name: "New Name", age: person.age + 1 }
            : person
        ),
      };

    default:
      return state;
  }
};
