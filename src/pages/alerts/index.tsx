import { Emergency, Template } from "@/components/Alerts";
import { Layout } from "@/components/Layout";
import Link from "next/link";

function ContactsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.6414 23.7138C21.6321 22.3775 20.3263 21.2938 18.8269 20.5481C17.3274 19.8024 15.6753 19.415 14.0007 19.4165C12.3261 19.415 10.674 19.8024 9.17457 20.5481C7.67514 21.2938 6.36935 22.3775 5.36006 23.7138M22.6414 23.7138C24.6109 21.962 25.9999 19.6528 26.6269 17.0925C27.2539 14.5322 27.0878 11.8419 26.1506 9.37818C25.2135 6.91448 23.5495 4.79387 21.3795 3.29757C19.2095 1.80128 16.6359 1 14 1C11.3641 1 8.79052 1.80128 6.62048 3.29757C4.45045 4.79387 2.78653 6.91448 1.84939 9.37818C0.912238 11.8419 0.746143 14.5322 1.37313 17.0925C2.00012 19.6528 3.39056 21.962 5.36006 23.7138M22.6414 23.7138C20.2639 25.8346 17.1866 27.0045 14.0007 27C10.8143 27.0049 7.73795 25.8349 5.36006 23.7138M18.3341 10.7497C18.3341 11.899 17.8775 13.0012 17.0649 13.8139C16.2522 14.6266 15.15 15.0831 14.0007 15.0831C12.8515 15.0831 11.7493 14.6266 10.9366 13.8139C10.1239 13.0012 9.66739 11.899 9.66739 10.7497C9.66739 9.60044 10.1239 8.49822 10.9366 7.68555C11.7493 6.87288 12.8515 6.41633 14.0007 6.41633C15.15 6.41633 16.2522 6.87288 17.0649 7.68555C17.8775 8.49822 18.3341 9.60044 18.3341 10.7497Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PortfailIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.3126 17.6875V23C25.3126 24.3675 24.3288 25.545 22.9726 25.725C20.3638 26.0712 17.7026 26.25 15.0001 26.25C12.2976 26.25 9.63632 26.0712 7.02757 25.725C5.67132 25.545 4.68757 24.3675 4.68757 23V17.6875M25.3126 17.6875C25.6094 17.4296 25.8469 17.1104 26.0087 16.752C26.1705 16.3936 26.2529 16.0045 26.2501 15.6113V10.8825C26.2501 9.53125 25.2901 8.36375 23.9538 8.16375C22.5379 7.95177 21.115 7.79042 19.6876 7.68M25.3126 17.6875C25.0701 17.8937 24.7876 18.0562 24.4713 18.1625C21.4166 19.1761 18.2186 19.691 15.0001 19.6875C11.6901 19.6875 8.50632 19.1512 5.52882 18.1625C5.22039 18.0599 4.93473 17.8986 4.68757 17.6875M4.68757 17.6875C4.39075 17.4296 4.15327 17.1104 3.99144 16.752C3.82962 16.3936 3.74727 16.0045 3.75007 15.6113V10.8825C3.75007 9.53125 4.71007 8.36375 6.04632 8.16375C7.46219 7.95177 8.88518 7.79042 10.3126 7.68M19.6876 7.68V6.5625C19.6876 5.81658 19.3913 5.10121 18.8638 4.57376C18.3364 4.04632 17.621 3.75 16.8751 3.75H13.1251C12.3791 3.75 11.6638 4.04632 11.1363 4.57376C10.6089 5.10121 10.3126 5.81658 10.3126 6.5625V7.68M19.6876 7.68C16.5672 7.43885 13.4329 7.43885 10.3126 7.68M15.0001 15.9375H15.0101V15.9475H15.0001V15.9375Z"
        stroke="#2B2B2B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Alerts() {
  return (
    <Layout containerClassName="px-4 py-0 grid gap-y-4">
      <Emergency />
      <Template
        title="Send to special contacts"
        description="Your health condition worsens? You may want to inform your loved ones about this!"
        id="123"
        icon={<ContactsIcon />}
      />
      <Template
        title="Send to job"
        description="Unable to do your job because of severe pain? It is possible to quickly notify the employer!"
        id="123"
        icon={<PortfailIcon />}
      />

      <Link href="/alerts/edit" className="fixed shadow-2xl bottom-24 right-5 btn btn-lg btn-circle btn-primary">
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
