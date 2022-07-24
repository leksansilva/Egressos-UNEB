import { useEffect } from "react";
import { api } from "../lib/api";
import { Card } from "./Card";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Main() {
  useEffect(() => {
    api
      .get("/students-all")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-9">
      {cards.map((cards) => (
        <Card key={cards} />
      ))}
    </div>
  );
}
