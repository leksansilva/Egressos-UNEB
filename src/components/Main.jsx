import { Card } from "./Card";
import { Loading } from "./Loading";

export function Main({ cards, loading }) {
  return loading ? (
    <Loading />
  ) : (
    <div className="flex justify-center flex-wrap gap-9">
      {cards.map((card) => (
        <Card key={card.students.id} student={card.students} />
      ))}
    </div>
  );
}
