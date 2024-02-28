import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchKey = event.target.value.toLowerCase();
    const searchResult = monsters.filter((u) =>
      u.name.toLowerCase().includes(searchKey)
    );
    setFilterMonsters(searchResult);
  };

  const fetchMonstersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setMonsters(result);
    setFilterMonsters(result);
  };

  useEffect(() => {
    fetchMonstersData();
  }, []);

  return (
    <main className="App">
      <SearchBox
        placeholder="Search Monsters"
        classNames="search-box"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filterMonsters} />
    </main>
  );
}

export default App;
