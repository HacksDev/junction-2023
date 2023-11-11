import classNames from "classnames";
import Link from "next/link";

export function Achievements(props: { className?: string }) {
  return (
    <section className={classNames("card bg-white relative", props.className)}>
      <Link href="/dashboard/achievements" className="absolute inset-0" />
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">New reward!</h2>
          <button className="btn btn-ghost btn-xs text-primary">All</button>
        </div>
        <div className="grid grid-cols-[1fr_auto]">
          <div>
            <img src="/images/achivement_1.png" style={{ maxHeight: 100, minWidth: 100 }}></img>
          </div>
          <div className="pl-5">
            <p className="text-md leading-none mb-3">Brave tester</p>

            <p className="w-max-[80%] text-[#9A9A9A] text-sm leading-none">
              You&apos;ve tried 3 new activities this week. Well done! Keep it up, you got it
            </p>
            <p className="w-max-[80%] text-[#9A9A9A] text-sm leading-none">
              Don&apos;t forget to add favorite activities to your calendar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
