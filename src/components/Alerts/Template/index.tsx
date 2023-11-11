import classNames from "classnames";
import Link from "next/link";
import { useCallback } from "react";
import { toast } from "react-toastify";

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
      />
    </svg>
  );
}

export function Template(props: {
  className?: string;
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const handleClick = useCallback(() => {
    toast.info("Messages have been successfully sent", { theme: "colored", toastId: 1 });
  }, []);

  return (
    <section className={classNames("grid items-end grid-cols-[1fr_auto] gap-x-5", props.className)}>
      <div className="card bg-white">
        <div className="card-body bg-transparent">
          <h2 className="flex items-center gap-x-2 ">
            {props.icon}
            {props.title}
          </h2>
          <p className="text-sm leading-none opacity-50">{props.description}</p>
          <Link className="underline" href={`/alerts/${props.id}`}>
            Edit
          </Link>
        </div>
      </div>
      <button onClick={handleClick} className="shadow-2xl btn btn-circle bg-white">
        <SendIcon />
      </button>
    </section>
  );
}
