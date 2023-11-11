import { Calendar, Achievements, Chart, LatestEvents } from "@/components/Dashboard";
import { Scoring } from "@/components/Dashboard/Scoring";
import { Layout } from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <Calendar navCard />
      <Chart />
      <Achievements />
      <Scoring />
    </Layout>
  );
}
