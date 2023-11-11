import React, { useState } from "react";
import classNames from "classnames";
import ReactCalendar from "react-calendar";
import Link from "next/link";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function Calendar(props: { className?: string; navCard?: boolean }) {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <section className={classNames("card bg-white relative", props.className)}>
      <div className="card-body">
        <ReactCalendar maxDate={new Date()} onChange={onChange} value={value} />
        {props.navCard && <button className="btn btn-primary btn-block">Open Calendar</button>}
      </div>
      {props.navCard && <Link href="/dashboard/calendar" className="absolute inset-0" />}
    </section>
  );
}
