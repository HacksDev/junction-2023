import { Layout } from "@/components/Layout";
import { Mascot } from "@/components/Mascot";
import Link from "next/link";
export default function Questionnaire() {
  return (
    <Layout containerClassName="px-4 py-0">
      <h1 className="text-xl font-medium my-9">My illness questionnaire</h1>
      <p className="text-md leading-none mb-3">Fill out your health information and lifestyle details. </p>

      <p className="text-md text-stone-400 leading-none mb-1">My diagnosis</p>
      <input
        type="text"
        placeholder="Diagnosis name"
        value="Ankylosing spondylitis"
        className="input w-full ml-3 mb-3"
      />

      <p className="text-md text-stone-400 leading-none mb-1">My typical symptoms</p>
      <input
        type="text"
        placeholder="Symptom 1, symptom 2"
        value="Severe backpain, morning stiffness and insomnia"
        className="input w-full ml-3 mb-3"
      />

      <p className="text-md text-stone-400 leading-none mb-1">Things I prefer doing in my free time</p>
      <input
        type="text"
        placeholder="Watching films"
        value="Reading books, gardening, knitting"
        className="input w-full ml-3 mb-3"
      />

      <p className="text-md text-stone-400 leading-none mb-1">Kinds of sport I can do</p>
      <input
        type="text"
        placeholder="footbool, volleyball"
        value="Walking and swimming"
        className="input w-full ml-3 mb-3"
      />

      <p className="text-md text-stone-400 leading-none mb-1">Things that could cheer me up (make me happy)</p>
      <input
        type="text"
        placeholder="Smiles"
        value="Tasty food, good company and nice films!"
        className="input w-full ml-3 mb-5"
      />

      <div className="flex items-center mb-5">
        <input type="checkbox" className="checkbox mr-3" />
        <p className="text-md inline-block leading-none">I want to share this information with my loved ones</p>
      </div>

      <Link href="/dashboard" className="btn btn-primary btn-block">
        Save
      </Link>
    </Layout>
  );
}
