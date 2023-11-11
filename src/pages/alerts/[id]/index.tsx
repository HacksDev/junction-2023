import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function EditTemplate() {
  return (
    <Layout containerClassName="px-4 py-0">
      <h1 className="text-xl font-medium my-9">Special contacts </h1>
      <p className="text-md leading-none mb-5">
        Contacts listed here will receive a notification from you.
        <br />
        You can inform them on anything (e.g. your condition changes or the need for medicines).
      </p>

      <div className="form-control w-full">
        <div className="input-group w-full">
          <input type="text" placeholder="Email" className="input w-full" />
          <button className="btn btn-ghost bg-base-100 btn-square">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.9825 16.7247C15.2838 15.7996 14.3798 15.0493 13.3417 14.5331C12.3036 14.0168 11.1599 13.7487 10.0005 13.7497C8.84115 13.7487 7.69739 14.0168 6.65932 14.5331C5.62125 15.0493 4.71724 15.7996 4.0185 16.7247M15.9825 16.7247C17.346 15.5119 18.3076 13.9133 18.7417 12.1408C19.1758 10.3683 19.0608 8.50579 18.412 6.80018C17.7632 5.09457 16.6112 3.62648 15.1089 2.5906C13.6066 1.55472 11.8248 1 10 1C8.17516 1 6.39343 1.55472 4.89111 2.5906C3.38878 3.62648 2.23683 5.09457 1.58804 6.80018C0.939242 8.50579 0.824253 10.3683 1.25832 12.1408C1.69239 13.9133 2.655 15.5119 4.0185 16.7247M15.9825 16.7247C14.3365 18.1929 12.2061 19.0028 10.0005 18.9997C7.79453 19.0031 5.66474 18.1931 4.0185 16.7247M13.0005 7.74971C13.0005 8.54535 12.6844 9.30842 12.1218 9.87103C11.5592 10.4336 10.7962 10.7497 10.0005 10.7497C9.20485 10.7497 8.44179 10.4336 7.87918 9.87103C7.31657 9.30842 7.0005 8.54535 7.0005 7.74971C7.0005 6.95406 7.31657 6.19099 7.87918 5.62838C8.44179 5.06578 9.20485 4.74971 10.0005 4.74971C10.7962 4.74971 11.5592 5.06578 12.1218 5.62838C12.6844 6.19099 13.0005 6.95406 13.0005 7.74971Z"
                stroke="#2C8482"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <span className="label-text-alt text-secondary">Add another contact</span>
      </div>

      <textarea className="textarea textarea-bordered w-full mt-4" placeholder="Notification message"></textarea>

      <div className="absolute bottom-24 inset-x-4 grid gap-y-2 mt-6">
        <Link href="/alerts" className="btn btn-primary btn-block">
          Save
        </Link>
        <Link href="/alerts" className="btn btn-outline btn-error btn-block">
          Cancel
        </Link>
      </div>
    </Layout>
  );
}