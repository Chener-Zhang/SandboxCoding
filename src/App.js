import "./styles.css";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const data = {
    day: 8,
    month: 11,
    year: 1998,
    hour: 11,
    min: 0,
    lat: 29.87491,
    lon: 121.537498,
    tzone: 8
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic NjE4NTczOmEzZDY1NzQ0NDU2MDYzYjQwYzkyMjA2MzQzNzE0ZDg3"
  };

  useEffect(() => {
    axios
      .post("https://json.astrologyapi.com/v1/planets/tropical", data, {
        headers: headers
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);
  return <div className="App"></div>;
}
