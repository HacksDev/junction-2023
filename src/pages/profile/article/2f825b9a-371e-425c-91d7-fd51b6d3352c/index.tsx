import { Layout } from "@/components/Layout";
import Link from "next/link";
import { useCallback } from "react";

export default function Profile() {
  const handleShareClick = useCallback(() => {
    try {
      if (navigator.share) {
        navigator
          .share({
            title: "HealthPace",
            text: "HealthPace writes article about my chronical pain. I want to share it with you",
            url: "https://junction2023.hacksdev.site/profile/article/2f825b9a-371e-425c-91d7-fd51b6d3352c",
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Layout containerClassName="grid gap-y-3">
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
      <strong>Understanding Ankylosing Spondylitis: A Guide for Friends and Family</strong>
      Hey there! We wanted to take a moment to talk about our buddy Mark. Mark is dealing with a condition called
      Ankylosing Spondylitis (AS), and we thought it&apos;s crucial for everyone to understand what he&apos;s going
      through. This article has been put together by specialists and doctors who know their stuff, so let&apos;s dive
      in.
      <strong>What&apos;s Ankylosing Spondylitis (AS)?</strong>
      AS is a type of arthritis that primarily affects the spine, causing inflammation and discomfort. Imagine dealing
      with severe back pain, morning stiffness, and trouble catching some Zs at night. It&apos;s a real challenge, but
      the right support, life can still be pretty awesome.
      <strong>Symptoms and Challenges</strong>
      Mark, like many dealing with AS, battles severe back pain. Imagine waking up every morning feeling like your body
      just had a wild party without you! Then there&apos;s that morning stiffness – it&apos;s like doing the robot dance
      involuntarily.
      <br></br>
      <br></br>
      But Mark&apos;s no quitter! He loves reading books, gardening, and even knitting in his free time. AS might try to
      him down, but it won&apos;t stop him from enjoying life.
      <strong>Pain Reductions and Coping Strategies</strong>
      So, how does Mark deal with the pain? Walking and swimming are his go-to activities. Movement is like WD-40 for
      his joints. And let&apos;s not forget about good food, company, and some heartwarming films – these are
      Mark&apos;s secret weapons against the daily battles with AS.
      <strong>Procedures and Restrictions</strong>
      Now, there are some procedures and restrictions Mark follows to keep the AS beast at bay. Regular exercise and
      maintaining a healthy lifestyle are key. Medications, as prescribed by his doctor, are crucial in managing the
      inflammation.
      <strong>Advice for Friends and Family</strong>
      Alright, friends and family, here&apos;s where you come in. Be patient and understanding. Some days, Mark might
      need a bit of extra support. Offer to join him for a walk or swim – it&apos;s good for both his physical and
      mental well-being.
      <br></br>
      <br></br>
      And hey, don&apos;t shy away from suggesting a movie night or cooking up some tasty grub. Your company means the
      world to him, and it&apos;s these simple pleasures that make living with AS a bit easier.
      <br></br>
      <br></br>
      Remember, everyone&apos;s journey with AS is unique, so it&apos;s essential to communicate openly and be flexible.
      <strong>Conclusion</strong>
      Living with Ankylosing Spondylitis is no walk in the park, but with the right mix of support, understanding, and a
      sprinkle of joy, individuals like Mark can continue enjoying life&apos;s little pleasures. Let&apos;s stand
      together, be there for Mark, and show AS that it&apos;s not the boss of him!
    </Layout>
  );
}
