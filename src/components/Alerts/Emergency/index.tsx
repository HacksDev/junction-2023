import classNames from "classnames";
import Link from "next/link";

function CallIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.53125 6.59375C1.53125 15.9133 9.08675 23.4688 18.4062 23.4688H20.9375C21.6088 23.4688 22.2527 23.2021 22.7274 22.7274C23.2021 22.2527 23.4688 21.6088 23.4688 20.9375V19.394C23.4688 18.8135 23.0739 18.3073 22.5103 18.1666L17.5344 16.9224C17.0394 16.7986 16.5196 16.9842 16.2148 17.3915L15.1235 18.8461C14.8062 19.2691 14.2584 19.4559 13.7622 19.2736C11.9205 18.5965 10.2479 17.5272 8.86038 16.1396C7.47284 14.7521 6.40348 13.0795 5.72638 11.2378C5.54413 10.7416 5.73088 10.1938 6.15388 9.8765L7.6085 8.78525C8.01687 8.48037 8.20138 7.9595 8.07763 7.46563L6.83337 2.48975C6.76491 2.21603 6.60694 1.97304 6.38456 1.79938C6.16218 1.62572 5.88815 1.53134 5.606 1.53125H4.0625C3.39117 1.53125 2.74734 1.79793 2.27264 2.27264C1.79793 2.74734 1.53125 3.39117 1.53125 4.0625V6.59375Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Emergency(props: { className?: string }) {
  return (
    <section className={classNames("grid items-end grid-cols-[1fr_auto] gap-x-5", props.className)}>
      <div className="card bg-error text-white">
        <div className="card-body bg-transparent">
          <h2 className="flex items-center gap-x-2 text-3xl">
            <CallIcon />
            112
          </h2>
          <p className="text-sm leading-none">
            Make an emergency call in case of acute pain or sharp condition deterioration
          </p>
          <Link className="underline" href="/alerts/emergency">
            Edit
          </Link>
        </div>
      </div>
      <Link href="tel:112" className="shadow-2xl btn btn-circle btn-error">
        <CallIcon />
      </Link>
    </section>
  );
}
