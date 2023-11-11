import { Layout } from "@/components/Layout";
import { Mascot } from "@/components/Mascot";
import Link from "next/link";
import { useCallback, useState } from "react";

const questions: Array<{
  title: string;
  value: string;
}> = [
  {
    title: "My diagnosis",
    value: "Ankylosing spondylitis",
  },
  {
    title: "My typical symptoms",
    value: "Severe backpain, morning stiffness and insomnia",
  },
  {
    title: "Things I prefer doing in my free time",
    value: "Reading books, gardening, knitting",
  },
  {
    title: "Kinds of sport I can do",
    value: "Walking and swimming",
  },
  {
    title: "Things that could cheer me up (make me happy)",
    value: "Tasty food, good company and nice films!",
  },
];

export default function Questionnaire() {
  const [checked, setChecked] = useState(false);

  const handleShareClick = useCallback(() => {
    try {
      if (navigator.share) {
        navigator
          .share({
            title: "HealthPace",
            text: "Share information about me",
            url: "https://junction2023.hacksdev.site/",
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Layout containerClassName="px-4 pb-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium my-9">My illness questionnaire</h1>
        <button onClick={handleShareClick} className="pl-5">
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
              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
            />
          </svg>
        </button>
      </div>
      <p className="text-md leading-none mb-3">Fill out your health information and lifestyle details. </p>

      <div className="grid gap-y-4">
        {questions.map((question) => {
          return (
            <div key={question.title} className="form-control w-full">
              <label className="label">
                <span className="label-text">{question.title}</span>
              </label>
              <input type="text" value={question.value} className="input w-full" />
            </div>
          );
        })}
      </div>

      <div className="form-control py-2">
        <label className="cursor-pointer label">
          <input type="checkbox" checked={checked} onChange={() => setChecked((prev) => !prev)} className="checkbox" />
          <span className="label-text pl-2 font-medium leading-none">
            I want to share this information with my loved ones
          </span>
        </label>
      </div>

      <div className="grid gap-y-2 mt-6">
        <Link href="/profile" className="btn btn-primary btn-block">
          Done
        </Link>
        <Link href="/profile" className="btn btn-outline btn-error btn-block">
          Cancel
        </Link>
      </div>
    </Layout>
  );
}
