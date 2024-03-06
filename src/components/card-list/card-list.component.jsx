import Card from "../card/card.component";

function CardList({ monsters }) {
  return (
    <section className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </section>
  );
}

export default CardList;
