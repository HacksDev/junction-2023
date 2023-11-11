import { Layout } from "@/components/Layout";
import dynamic from "next/dynamic";

const TemplateForm = dynamic(() => import("@/components/Alerts/TemplateForm"), {
  ssr: false,
});

export default function EditTemplate() {
  return (
    <Layout containerClassName="px-4 pb-5">
      <TemplateForm />
    </Layout>
  );
}
