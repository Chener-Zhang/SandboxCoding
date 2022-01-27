import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarPicker() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <DatePicker
        value={date}
        onChange={(date) => setDate(date)}
        selected={date}
      />
    </>
  );
}
