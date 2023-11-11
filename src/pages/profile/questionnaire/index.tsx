import { Layout } from "@/components/Layout";
import { Mascot } from "@/components/Mascot";
import Link from "next/link";

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
  return (
    <Layout containerClassName="px-4 pb-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium my-9">My illness questionnaire</h1>
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
      <Link href="/profile/article/2f825b9a-371e-425c-91d7-fd51b6d3352c">
        <div className="btn btn-primary btn-block my-10">Generate article for friends</div>
      </Link>
    </Layout>
  );
}
