import { Navigator } from "../components/Navigator";
import { Main } from "../components/Main";
import LogoUNEB from "../assets/logo/uneb.svg";
import { useEffect, useState } from "react";
import { api } from "../lib/api";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  console.log(students);
  useEffect(() => {
    setLoading(true);
    api
      .get("/students-all")
      .then((response) => {
        if (response.status === 200) {
          setStudents(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 404);
      });
  }, []);

  return (
    <div className="p-5 flex flex-col gap-20 items-center">
      <img
        className="absolute top-4 right-4 w-16 md:w-24"
        src={LogoUNEB}
        alt="logo"
      />
      <Navigator />
      <Main cards={students} loading={loading} />
    </div>
  );
}
