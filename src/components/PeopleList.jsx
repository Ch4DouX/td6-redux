import { useDispatch, useSelector } from "react-redux";
import { deletePerson, updatePerson } from "../store/actions";

const PeopleList = () => {
  const people = useSelector((state) => state.people);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Liste des personnes</h2>
      {people.length === 0 && <p>Aucune personne ajoutée</p>}
      {people.map((person) => (
        <div key={person.id} style={{ marginBottom: "10px" }}>
          <span>
            {person.name} — {person.age} ans
          </span>
          <button
            onClick={() => dispatch(deletePerson(person.id))}
            style={{ marginLeft: "10px" }}
          >
            Supprimer
          </button>
          <button
            onClick={() => dispatch(updatePerson(person.id))}
            style={{ marginLeft: "5px" }}
          >
            Modifier
          </button>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
