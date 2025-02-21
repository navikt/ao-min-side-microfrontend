import styles from "./ArbeidsrettetOppfolgingPanel.module.css";
import { BodyShort, Heading, ReadMore } from "@navikt/ds-react";
import { Language, LanguageContext } from "../language/LanguageProvider";
import { useContext, useEffect, useState } from "react";
import { text } from "../translations/text";
import { VeilarboppfolgingApi } from "../api/veilarboppfolging";

function getLocale(language: Language) {
  if (language === "nb") {
    return "nb-NO";
  } else if (language === "nn") {
    return "nn-NO";
  } else {
    return "en-US";
  }
}

const formatDate = (date: Date, language: Language): string => {
  console.log("language: ", language);

  const formatter = new Intl.DateTimeFormat(getLocale(language), {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(date);
};

const ArbeidsrettetOppfolgingPanel = () => {
  const language = useContext(LanguageContext);
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    VeilarboppfolgingApi.hentGjeldendeOppfolgingsperiode().then((response) => setTimestamp(response));
  }, []);

  console.log("timestamp: ", timestamp);

  const cleanedTimestamp = timestamp.replace(/(\.\d{3})\d*/, "$1"); // Trimmer til tre desimaler

  console.log("cleanedTimestamp: ", cleanedTimestamp);

  const startTidspunkt = formatDate(new Date(cleanedTimestamp), language);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading size="small" className={styles.heading}>
          {text(startTidspunkt).card.heading[language]}
        </Heading>
      </div>
      <div className={styles.body}>
        <BodyShort className={styles.detail}>{text(startTidspunkt).card.description[language]}</BodyShort>
        <ReadMore header={text(startTidspunkt).card.readMoreTittel[language]}>
          {text(startTidspunkt).card.readMoreInnhold[language]}
        </ReadMore>
      </div>
    </div>
  );
};

export default ArbeidsrettetOppfolgingPanel;
