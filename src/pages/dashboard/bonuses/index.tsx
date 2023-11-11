import { Layout } from "@/components/Layout";

export default function Achievements() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <section className="card text-white relative" style={{ backgroundColor: "#2C8482" }}>
        <div className="card-body">
          <div className="flex flex-direction-column align-self-flex-end ">
            <div>
              You made a huge progress so far! Contact your insurance company and get a benefit - month of free swimming
              lessons
            </div>
          </div>
        </div>
      </section>

      <section className="card bg-white relative">
        <div className="card-body">
          <div className="flex flex-direction-column align-self-flex-end">
            <div>
              <img src="/images/books.jpeg" style={{ maxHeight: 150, minWidth: 150, maxWidth: 150 }}></img>
            </div>
            <div className="pl-5">
              <p className="text-md leading-none mb-3">
                <strong>Books</strong>
              </p>
              <p className="text-md leading-none mb-3">
                20% discount on all books from “Living with chronic illness” section. Use until 25.05.2024 <br></br>
                <br></br>Feel free to get other bestsellers on Books4people.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="card bg-white relative">
        <div className="card-body">
          <div className="flex flex-direction-column align-self-flex-end">
            <div>
              <img src="/images/massage.jpeg" style={{ maxHeight: 150, minWidth: 150, maxWidth: 150 }}></img>
            </div>
            <div className="pl-5">
              <p className="text-md leading-none mb-3">
                <strong>Massage</strong>
              </p>
              <p className="text-md leading-none mb-3">
                15% discount for the first massage season ticket bought before 23.04.2024. <br></br>
                <br></br>Stay healthy. Be happy! Cowshed salon and spa (cowshed.com)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="card bg-white relative">
        <div className="card-body">
          <div className="flex flex-direction-column align-self-flex-end">
            <div>
              <img src="/images/yoga.jpeg" style={{ maxHeight: 150, minWidth: 150, maxWidth: 150 }}></img>
            </div>
            <div className="pl-5">
              <p className="text-md leading-none mb-3">
                <strong>Yoga</strong>
              </p>
              <p className="text-md leading-none mb-3">
                Want to join yoga class? Time to buy some equipment! <br></br>
                <br></br>Buy everything you need at Yogamatters.com and get a yoga mat for free! Your promo-code:
                HEALTHWEALTH
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
