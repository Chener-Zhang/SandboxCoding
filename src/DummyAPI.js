import axios from "axios";
import { useEffect, useState } from "react";

export default function DummyAPI() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageMax, setPageMax] = useState(0);
  const dataPerPage = 5;
  const currentPage = data.slice((page - 1) * dataPerPage, page * dataPerPage);
  useEffect(() => {
    //then((res) => setData(res.data.data)).slice(0,10)
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        setData(res.data.data);
        const pageN = Math.ceil(res.data.data.length / dataPerPage);
        setPageMax(pageN);
      })
      .catch((errer) => console.log(errer));
  }, []);

  const pageList = [];
  if (pageMax) {
    for (let i = 1; i <= pageMax; i++) {
      pageList.push(i);
    }
  }
  function changePage(id) {
    const page = Number(id);
    setPage(page);
  }

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <h3>{search}</h3>
      {currentPage && (
        <ul>
          {currentPage
            .filter((item) => {
              return item.employee_name.toLowerCase().includes(search);
            })
            .map((item) => {
              return <li key={item.key}>{item.employee_name}</li>;
            })}
        </ul>
      )}

      {pageList && (
        <ul style={{ display: "flex", listStyle: "none" }}>
          {pageList.map((item) => {
            return (
              <li key={item} onClick={(e) => changePage(e.target.innerHTML)}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
      <div></div>
    </>
  );
}
