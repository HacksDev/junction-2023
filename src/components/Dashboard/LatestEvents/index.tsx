import classNames from "classnames";

export function LatestEvents(props: { className?: string }) {
  return (
    <section className={classNames("card bg-white", props.className)}>
      <div className="card-body">
        <h2 className="font-medium">History</h2>
        <p className="text-sm">The last intake of the drug was 4 days ago</p>
      </div>
    </section>
  );
}
