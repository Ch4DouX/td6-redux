import PersonForm from "./components/PersonForm";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>TD 6 — Redux</h1>
      <PersonForm />
      <PeopleList />
    </div>
  );
}

export default App;
