import { Calendar } from "@/components/Dashboard";
import { Layout } from "@/components/Layout";

export default function CalendarEvents() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <Calendar />
    </Layout>
  );
}
