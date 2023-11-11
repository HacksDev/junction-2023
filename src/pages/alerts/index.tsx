import { Emergency } from "@/components/Alerts";
import { Layout } from "@/components/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";

const Templates = dynamic(() => import("@/components/Alerts/Templates"), {
  ssr: false,
});

export default function Alerts() {
  return (
    <Layout containerClassName="px-4 pb-32 grid gap-y-4">
      <Emergency />
      <Templates />

      <Link href="/alerts/add" className=" fixed shadow-2xl bottom-24 right-5 btn btn-lg btn-circle btn-primary">
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
