import React, { useEffect, useState } from "react";
import classNames from "classnames";
import ReactCalendar from "react-calendar";
import Link from "next/link";
import { formatDate } from "@/pages/dashboard/calendar/edit/index";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type DateParameterType = {
  date: Date;
  view: string; // You might need to adjust the type of 'view' as well
};

function tileContent({ date, view }: DateParameterType) {
  // Add class to tiles in month view only

  if (typeof window !== "undefined" && window.localStorage) {
    const dates = localStorage.getItem("calendarData");
    if (dates == null) return;
    const storedDates = JSON.parse(dates as string);

    if (view === "month") {
      const dddd = formatDate(date);
      const count: number = storedDates.dates.filter((val: string) => val === dddd).length;
      return <div style={{ position: "absolute"}}>
        <br/>
        {"•".repeat(count)}
      </div>;
    }
  }
}

export function Calendar(props: { className?: string; navCard?: boolean; onDateSelect: any }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    props.onDateSelect(date); // Notify the parent component about the selected date
  };

  return (
    <section className={classNames("card bg-white relative", props.className)}>
      <div className="card-body">
        <ReactCalendar
          maxDate={new Date()}
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={({ date, view }: DateParameterType) => tileContent({ date, view })}
        />
        {props.navCard && <button className="btn btn-primary btn-block">Open Calendar</button>}
      </div>
      {props.navCard && <Link href="/dashboard/calendar" className="absolute inset-0" />}
    </section>
  );
}
