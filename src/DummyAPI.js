import axios from "axios";
import { useEffect, useState } from "react";

export default function DummyAPI() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageMax, setPageMax] = useState(0);
  const dataPerPage = 5;

  useEffect(() => {
    //then((res) => setData(res.data.data)).slice(0,10)
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        setData(res.data.data);
        const page = Math.ceil(res.data.data.length / dataPerPage);
        setPageMax(page);
      })
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
            .map((item, index) => {
              if (page === Math.ceil(index / dataPerPage)) {
                return <li key={item.key}>{item.employee_name}</li>;
              }
            })}
        </ul>
      )}
      <div>
        <h2>{page}</h2>
        <button
          onClick={() => {
            if (page !== 0) {
              setPage(page - 1);
            }
          }}
        >
          previous
        </button>
        <button
          onClick={() => {
            if (page < pageMax) {
              setPage(page + 1);
            }
          }}
        >
          next
        </button>
      </div>
    </>
  );
}
