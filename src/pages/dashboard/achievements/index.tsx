import { Layout } from "@/components/Layout";

export default function Achievements() {
  return (
    <Layout containerClassName="grid gap-y-3">
      <section className="card bg-white relative">
        <div className="card-body">
          <div className="flex flex-direction-column align-self-flex-end">
            <div>
              <img src="/images/achivement_1.png" style={{ maxHeight: 150, minWidth: 150 }}></img>
            </div>
            <div className="pl-5">
              <p className="text-md leading-none mb-3">Brave tester</p>
              <p className="text-md leading-none mb-3">
                You’ve tried 3 new activities this week. Well done! Don’t forget to add favorite activities to your
                calendar!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="card bg-white relative">
        <div className="card-body">
          <div className="flex flex-direction-column align-self-flex-end">
            <div>
              <img src="/images/achivement_2.png" style={{ maxHeight: 150, minWidth: 150 }}></img>
            </div>
            <div className="pl-5">
              <p className="text-md leading-none mb-3">NOT at all costs</p>
              <p className="text-md leading-none mb-3">
                You decided not to take strong medications and learned to abstract from mild pain. Absolute winner!
                Remember: there is nothing bad in medical treatment. But it shouldn’t be your first choice on a regular
                basis!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="card bg-white relative">
        <div className="card-body">
          <div className="flex flex-direction-column align-self-flex-end">
            <div>
              <img src="/images/achivement_3.png" style={{ maxHeight: 150, minWidth: 150 }}></img>
            </div>
            <div className="pl-5">
              <p className="text-md leading-none mb-3">Healthy days</p>
              <p className="text-md leading-none mb-3">
                Congratulations! It was your first month without consuming heavy medications. Keep it up! However,
                medical treatment is essential for your well-being. If the pain is unbearable, contact your doctor ASAP.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
