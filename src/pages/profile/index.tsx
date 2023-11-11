import { Calendar, Achievements, Chart, LatestEvents } from "@/components/Dashboard";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function Profile() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <div className="relative text-black flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src="/images/portrait.jpg" alt="" />
          </div>
        </div>
        <div className="mt-16 text-black flex flex-col items-center">
          <h4 className="text-xl font-bold">Menelaos Onuphrius</h4>
          <p className="text-base font-normal">Chronic Back Pain</p>
        </div>

        <div className="grid mt-4 gap-y-4 w-full">
          <Link href="/profile/questionnaire" className="btn btn-primary btn-block">
            My illness questionnaire
          </Link>
          <Link href="/" className="btn btn-outline btn-block">
            Logout
          </Link>
        </div>
      </div>
    </Layout>
  );
}
