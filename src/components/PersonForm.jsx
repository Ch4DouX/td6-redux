import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../store/actions";

const PersonForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;

    dispatch(
      addPerson({
        id: Date.now(),
        name,
        age: Number(age),
      })
    );

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Âge"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default PersonForm;
