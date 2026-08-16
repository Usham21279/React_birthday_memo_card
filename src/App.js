import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  let temp_people = [];
  temp_people = [...people];
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            temp_people.pop();
            setPeople(temp_people);
          }}
        >
          clear last
        </button>
      </section>
    </main>
  );
}

export default App;
