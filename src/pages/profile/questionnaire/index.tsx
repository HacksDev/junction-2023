import { Layout } from "@/components/Layout";
import { Mascot } from "@/components/Mascot";
import Link from "next/link";
export default function Questionnaire() {
  return (
    <Layout containerClassName="px-4 py-0">
      <h1 className="text-xl font-medium my-9">My illness questionnaire</h1>
      <p className="text-md leading-none mb-3">Fill out your health information and lifestyle details. </p>

      <p className="w-max-[80%] text-[#9A9A9A] text-sm leading-none mb-3">
        You need to contact your doctor or insurance company to receive a special code. Your unique code should be
        entered below.
      </p>

      <Link href="/dashboard" className="btn btn-primary btn-block">
        Next
      </Link>
    </Layout>
  );
}
