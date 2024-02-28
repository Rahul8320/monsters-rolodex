function CardList({ monsters }) {
  return (
    <section className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <div className="card-container" key={id}>
            <img
              src={`https://robohash.org/${id}?set=set5&size180x180`}
              alt={`monster ${name}`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
      })}
    </section>
  );
}

export default CardList;
