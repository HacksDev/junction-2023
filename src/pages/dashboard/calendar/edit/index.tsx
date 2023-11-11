import { Layout } from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "../../../../../node_modules/next/router";
import { useCalendar } from "./CalendarProvider";

export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);

  return `${day} ${month}`;
};

export default function EditCalendar() {
  const { state, dispatch } = useCalendar();
  const [selectedMedication, setSelectedMedication] = useState("Methotrexate");
  const [selectedDose, setSelectedDose] = useState("100g");

  const router = useRouter();
  const { selectedDate } = router.query;
  const parsedDate = selectedDate ? new Date(selectedDate as string) : null;

  const date = formatDate(parsedDate as Date);

  const handleDoneClick = () => {
    dispatch({ type: "ADD_MEDICATION", payload: selectedMedication });
    dispatch({ type: "ADD_DOSE", payload: selectedDose });
    dispatch({ type: "ADD_DATE", payload: date });
  };

  return (
    <Layout containerClassName="px-4 py-0">
      <h1 className="text-xl font-medium my-9">{date} 2023</h1>
      <p className="text-md leading-none mb-5">
        Time to evaluate your daily experience! How do you feel today? Which activity did you try?
        <br />
        Don’t forget to add the number of medication taken.
      </p>

      <div className="grid gap-y-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Add medication</span>
          </label>
          <select
            className="select select-bordered"
            value={selectedMedication}
            onChange={(e) => setSelectedMedication(e.target.value)}
          >
            <option>Methotrexate</option>
            <option>Ibuprofen</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Dose</span>
          </label>
          <select
            className="select select-bordered"
            value={selectedDose}
            onChange={(e) => setSelectedDose(e.target.value)}
          >
            <option>100g</option>
            <option>200g</option>
            <option>300g</option>
            <option>400g</option>
          </select>
        </div>
      </div>

      <div className="grid gap-y-2 mt-6">
        <Link href="/dashboard/calendar" className="btn btn-primary btn-block" onClick={handleDoneClick}>
          Done
        </Link>
        <Link href="/dashboard/calendar" className="btn btn-outline btn-error btn-block">
          Cancel
        </Link>
      </div>
    </Layout>
  );
}
