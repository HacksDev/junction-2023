import React from "react";
import classNames from "classnames";
import ReactCalendar from "react-calendar";

export function Calendar(props: { className?: string }) {
  return (
    <section className={classNames("card", props.className)}>
      <ReactCalendar className="card-body" />
    </section>
  );
}
