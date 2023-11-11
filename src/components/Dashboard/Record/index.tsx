import classNames from "classnames";
import dayjs from "dayjs";
import Link from "next/link";

const activities = ["Cycling", "Drawing", "Singing", "Swimming", "Hiking", "Yoga", "Paddling", "Fishing"] as const;
const emotions = [
  "Happiness",
  "Love",
  "Relief",
  "Contentment",
  "Amusement",
  "Joy",
  "Pride",
  "Excitement",
  "Peace",
  "Satisfaction",
  "Lonely",
  "Heartbroken",
  "Gloomy",
  "Disappointed",
  "Hopeless",
  "Grieved",
  "Unhappy",
  "Lost",
  "Troubled",
  "Resigned",
  "Miserable",
] as const;
const statuses = ["Effective", "Effective", "50/50", "Not for me"] as const;

const getActivities = () => {
  const shuffled = [...activities].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map((act) => ({
    activity: act,
    effective: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

const getEmotions = () => {
  const shuffled = [...emotions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map((emp) => ({
    emotion: emp,
    value: Math.floor(Math.random() * (5 - 0 + 1) + 0),
  }));
};

export function Record(props: { className?: string }) {
  const activities = getActivities();
  const emotions = getEmotions();
  return (
    <section className={classNames("card bg-white relative", props.className)}>
      <Link href="/dashboard/calendar/edit" className="absolute inset-0" />
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">{dayjs().format("DD MMMM YYYY")}</h2>
          <button className="text-primary text-2xl">›</button>
        </div>

        <div className="grid gap-y-4">
          <ul>
            {activities.map((act) => (
              <li key={act.activity} className="flex space-x-3 items-center">
                <span
                  className={classNames("badge badge-xs", {
                    "badge-error": act.effective === statuses[3],
                    "badge-warning": act.effective === statuses[2],
                    "badge-success": act.effective === statuses[0],
                  })}
                />

                <p>{act.activity}</p>
                <span
                  className={classNames("text-sm", {
                    "text-error": act.effective === statuses[3],
                    "text-warning": act.effective === statuses[2],
                    "text-success": act.effective === statuses[0],
                  })}
                >
                  {act.effective}
                </span>
              </li>
            ))}
          </ul>

          <ul>
            {emotions.map((emo) => (
              <li key={emo.emotion} className="flex items-center space-x-3">
                <span>{emo.emotion}</span>
                <div className="rating rating-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={emo.emotion}
                      checked={i < emo.value}
                      className="mask mask-star-2 bg-orange-400"
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Record;
