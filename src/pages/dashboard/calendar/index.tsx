import { Calendar } from "@/components/Dashboard";
import { Record } from "@/components/Dashboard/Record";
import { Layout } from "@/components/Layout";

export default function CalendarEvents() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <Calendar />
      <Record />
      <Record />
      <Record />
      <Record />
    </Layout>
  );
}
