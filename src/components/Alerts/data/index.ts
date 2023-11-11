export type TemplateIcon = "portfail" | "contacts" | "default";

export type TemplateData = {
  title: string;
  icon: TemplateIcon;
  description: string;
  emails: string[];
  message: string;
};

export const initialTemplatesData: Record<string, TemplateData> = {
  contacts: {
    title: "Send to special contacts",
    description: "Your health condition worsens? You may want to inform your loved ones about this!",
    emails: ["mom@mail.com", "dad@mail.com"],
    message: "",
    icon: "contacts",
  },
  job: {
    title: "Send to job",
    description: "Unable to do your job because of severe pain? It is possible to quickly notify the employer!",
    emails: ["boss@mail.com", "hrbp@mail.com"],
    message: "",
    icon: "portfail",
  },
};

export const initialFormData: TemplateData = {
  title: "Notification group",
  description: "A customizable notification group that will help you keep important people informed about your status!",
  emails: [],
  message: "",
  icon: "default",
};
