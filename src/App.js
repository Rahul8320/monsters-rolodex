import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchMonstersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setMonsters(result);
  };

  useEffect(() => {
    fetchMonstersData();
  }, []);

  return (
    <main className="App">
      <section>
        <input
          type="search"
          placeholder="search monsters"
          className="search-box"
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </section>
      <section>
        {monsters
          .filter((u) => u.name.toLowerCase().includes(searchKey.toLowerCase()))
          .map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
      </section>
    </main>
  );
}

export default App;
