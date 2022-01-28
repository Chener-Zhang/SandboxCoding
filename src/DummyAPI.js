import axios from "axios";
import { useEffect, useState } from "react";

export default function DummyAPI() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    //then((res) => setData(res.data.data)).slice(0,10)
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => setData(res.data.data))
      .catch((errer) => console.log(errer));
  }, []);

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <h3>{search}</h3>
      {data && (
        <ul>
          {data
            .filter((item) => {
              return item.employee_name.toLowerCase().includes(search);
            })
            .map((item) => {
              return <li key={item.key}>{item.employee_name}</li>;
            })}
        </ul>
      )}
    </>
  );
}
