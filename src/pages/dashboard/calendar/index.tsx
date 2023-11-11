import { Calendar } from "@/components/Dashboard";
import { Record } from "@/components/Dashboard/Record";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function CalendarEvents() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <Calendar />
      <Record />
      <Record />
      <Record />
      <Record />
      <Link
        href="/dashboard/calendar/edit"
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
