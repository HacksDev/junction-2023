import classNames from "classnames";
import Link from "next/link";

function AwardIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.9997 58.6668C58.175 58.6668 69.6663 47.1755 69.6663 33.0002C69.6663 18.8249 58.175 7.3335 43.9997 7.3335C29.8244 7.3335 18.333 18.8249 18.333 33.0002C18.333 47.1755 29.8244 58.6668 43.9997 58.6668ZM43.9997 22.0002C42.958 22.0002 42.2613 23.2499 40.868 25.7494L40.5075 26.396C40.1119 27.1063 39.9139 27.4614 39.6052 27.6957C39.2964 27.9301 38.9122 28.0171 38.1433 28.191L37.4433 28.3494C34.7375 28.9616 33.3847 29.2677 33.0629 30.3027C32.741 31.3377 33.6632 32.4161 35.5078 34.5731L35.985 35.1311C36.5092 35.744 36.7712 36.0505 36.8893 36.4296C37.007 36.8087 36.9674 37.2176 36.8882 38.0356L36.8159 38.7799C36.5371 41.6579 36.3977 43.0967 37.2402 43.7365C38.0831 44.376 39.3496 43.793 41.8829 42.6266L42.5381 42.3249C43.2583 41.9934 43.618 41.8277 43.9997 41.8277C44.3814 41.8277 44.7411 41.9934 45.4612 42.3249L46.1164 42.6266C48.6497 43.793 49.9162 44.376 50.7592 43.7365C51.6018 43.0967 51.4621 41.6579 51.1834 38.7799L51.1112 38.0356C51.032 37.2176 50.9924 36.8087 51.1101 36.4296C51.2281 36.0505 51.4903 35.744 52.0143 35.1312L52.4917 34.5731C54.336 32.4161 55.2585 31.3377 54.9366 30.3027C54.6147 29.2677 53.2617 28.9616 50.556 28.3494L49.8561 28.191C49.0872 28.0171 48.7029 27.9301 48.3942 27.6957C48.0854 27.4614 47.8874 27.1063 47.4918 26.396L47.1314 25.7494C45.738 23.2499 45.0414 22.0002 43.9997 22.0002Z"
        fill="url(#paint0_linear_21_25328)"
      />
      <path
        d="M26.0077 58.4517L24.6189 63.5175C22.315 71.9208 21.163 76.1224 22.7002 78.4229C23.239 79.2288 23.9617 79.876 24.8003 80.3028C27.1932 81.5212 30.888 79.5962 38.2774 75.7459C40.7363 74.4647 41.9657 73.8242 43.2718 73.6848C43.7562 73.6331 44.2438 73.6331 44.7282 73.6848C46.0343 73.8242 47.2637 74.4647 49.7226 75.7459C57.112 79.5962 60.8069 81.5212 63.1998 80.3028C64.0383 79.876 64.761 79.2288 65.2997 78.4229C66.8371 76.1224 65.685 71.9208 63.3813 63.5175L61.9923 58.4517C56.9096 62.0512 50.7019 64.1665 44 64.1665C37.2981 64.1665 31.0902 62.0512 26.0077 58.4517Z"
        fill="url(#paint1_linear_21_25328)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_21_25328"
          x1="43.9997"
          y1="7.3335"
          x2="43.9997"
          y2="58.6668"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1C877" />
          <stop offset="1" stop-color="#FFA800" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_25328"
          x1="44"
          y1="58.4517"
          x2="44"
          y2="80.6664"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1C877" />
          <stop offset="1" stop-color="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

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
          <AwardIcon />
          <div>
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
