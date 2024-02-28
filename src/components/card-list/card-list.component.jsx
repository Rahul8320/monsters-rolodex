import Card from "../card/card.component";

function CardList({ monsters }) {
  return (
    <section className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </section>
  );
}

export default CardList;
