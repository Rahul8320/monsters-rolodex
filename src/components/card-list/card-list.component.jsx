function CardList({ monsters }) {
  return (
    <section>
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })}
    </section>
  );
}

export default CardList;
