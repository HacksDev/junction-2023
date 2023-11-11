import { Layout } from "@/components/Layout";
import { Mascot } from "@/components/Mascot";
import Link from "next/link";
export default function Home() {
  return (
    <Layout containerClassName="px-4 py-0">
      <h1 className="text-xl font-medium my-9">Welcome to HealthPace!</h1>
      <p className="text-md leading-none mb-3">Login or register to get full access to our service.</p>

      <p className="w-max-[80%] text-[#9A9A9A] text-sm leading-none mb-3">
        You need to contact your doctor or insurance company to receive a special code. Your unique code should be
        entered below.
      </p>

      <input
        type="text"
        placeholder="HLTH1239MIRIAMCOLETTE"
        value="HLTH1239MIRIAMCOLETTE"
        className="input input-ghost w-full"
      />
      <Mascot className="mx-auto my-5" />
      <Link href="/dashboard" className="btn btn-primary btn-block">
        Login
      </Link>
    </Layout>
  );
}
