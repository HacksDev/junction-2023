import { Calendar, Achievements, Chart, LatestEvents } from "@/components/Dashboard";
import { Layout } from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <Calendar />
      <Chart />
      <Achievements />
      <LatestEvents />
    </Layout>
  );
}
