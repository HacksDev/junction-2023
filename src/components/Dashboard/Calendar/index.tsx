import React, {useEffect, useState } from "react";
import classNames from "classnames";
import ReactCalendar from "react-calendar";
import Link from "next/link";
import { formatDate } from "@/pages/dashboard/calendar/edit/index";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function tileContent({ date, view }) {
    // Add class to tiles in month view only

    const dates = localStorage.getItem('calendarData')
    if(dates == null) return
    const storedDates = JSON.parse(dates as string);

    if (view === 'month') {
        const dddd = formatDate(date)
        // Check if a date React-Calendar wants to check is on the list of dates to add class to
        const count: number = storedDates.dates.filter((val) => val === dddd).length;

        return '•'.repeat(count);
    }
}

export function Calendar(props: { className?: string; navCard?: boolean, onDateSelect: any }) {
    const [selectedDate, setSelectedDate] = useState<Value>(new Date());

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        props.onDateSelect(date); // Notify the parent component about the selected date
    };

    return (
        <section className={classNames("card bg-white relative", props.className)}>
            <div className="card-body">
                <ReactCalendar maxDate={new Date()} onChange={handleDateChange} value={selectedDate}
                               tileContent={({ date, view }) => tileContent({ date, view })}
                />
                {props.navCard && <button className="btn btn-primary btn-block">Open Calendar</button>}
            </div>
            {props.navCard && <Link href="/dashboard/calendar" className="absolute inset-0" />}
        </section>
    );
}