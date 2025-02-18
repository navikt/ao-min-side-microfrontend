import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  microfrontendTitle: {
    nb: "Du er registrert for arbeidsrettet oppfølging",
    nn: "Dette kjem til å bli ein awesome mikrofrontend!",
    en: "This is going to be an amazing microfrontend!",
  },
  microfrontendText: {
    nb: "blabla",
    nn: "blabla",
    en: "blabla",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
