import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function EditCalendar() {
  return (
    <Layout containerClassName="px-4 py-0">
      <h1 className="text-xl font-medium my-9">14 November 2023</h1>
      <p className="text-md leading-none mb-5">
        Time to evaluate your daily experience! How do you feel today? Which activity did you try?
        <br />
        Don’t forget to add the number of medication taken.
      </p>

      <div className="grid gap-y-4">
        <div className="dropdown w-full">
          <input type="text" placeholder="Medicine" className="input input-ghost w-full" />
          <span className="label-text-alt text-secondary">Add another medicine</span>

          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-full">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        <div className="dropdown w-full">
          <input type="text" placeholder="Feeling" className="input input-ghost w-full" />
          <span className="label-text-alt text-secondary">Add another feeling</span>

          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-full">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        <div className="dropdown w-full">
          <input type="text" placeholder="Hobby" className="input input-ghost w-full" />
          <span className="label-text-alt text-secondary">Add another hobby</span>

          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-full">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid gap-y-2 mt-6">
        <Link href="/dashboard/calendar" className="btn btn-primary btn-block">
          Done
        </Link>
        <Link href="/dashboard/calendar" className="btn btn-outline btn-error btn-block">
          Cancel
        </Link>
      </div>
    </Layout>
  );
}
