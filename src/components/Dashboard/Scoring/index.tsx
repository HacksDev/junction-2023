import classNames from "classnames";
import Link from "next/link";

export function Scoring(props: { className?: string }) {
  return (
    <section className={classNames("card bg-white relative", props.className)}>
      <Link href="/dashboard/bonuses" className="absolute inset-0" />
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Scoring</h2>
          <button className="btn btn-ghost btn-xs text-primary">Bonuses</button>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div className="stat-title">Points</div>
            <div className="stat-value">12,513</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div>
            <div className="stat-title">New Activities</div>
            <div className="stat-value">4</div>
            <div className="stat-desc">Tried on this week</div>
          </div>
        </div>
      </div>
    </section>
  );
}
