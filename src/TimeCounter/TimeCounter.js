import { useEffect, useState } from "react";

function TimeCounter() {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div>
      <h2>Time: {time}</h2>
      <button onClick={() => setActive(!active)}>
        {active ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default TimeCounter;
