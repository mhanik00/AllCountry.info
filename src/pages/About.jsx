import dayjs from "dayjs";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function About() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="mx-10 mt-10">
      <h1 className="text-lime-500 text-4xl font-bold">This is about page</h1>
      <h1 className="text-red-500 text-4xl font-bold my-5">Date picker</h1>
      <DatePicker selected={startDate} onChange={(startDate) => setStartDate(startDate)} />
      <h1 className="text-red-500 text-4xl font-bold my-5">Date picker result</h1>
       <h2>{dayjs(startDate).format( 'YYYY-MM-DD')}</h2>
    </div>
  )
}
