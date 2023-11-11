import { Calendar } from "@/components/Dashboard";
import { Layout } from "@/components/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const Record = dynamic(() => import("@/components/Dashboard/Record"), {
  ssr: false,
});

export default function CalendarEvents() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };


    return (
    <Layout containerClassName="grid gap-y-3 pb-28">
      <h1 className="text-xl font-medium my-3 ml-4">Calendar</h1>
      <Calendar onDateSelect={handleDateSelect}/>
      <Record />
      <Record />
      <Record />
      <Link
          href={{ pathname: '/dashboard/calendar/edit', query: { selectedDate: selectedDate.toISOString()  } }}
        className="fixed shadow-2xl bottom-24 right-5 btn btn-lg btn-circle btn-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Link>
    </Layout>
  );
}
