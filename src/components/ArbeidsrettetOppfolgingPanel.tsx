import styles from "./ArbeidsrettetOppfolgingPanel.module.css";
import { BodyShort, Box, Heading, ReadMore } from "@navikt/ds-react";
import { Language, LanguageContext } from "../language/LanguageProvider";
import { useContext, useEffect, useState } from "react";
import { descriptionText, text } from "../translations/text";
import { VeilarboppfolgingApi } from "../api/veilarboppfolging";
import { loggBesok } from "../utils/amplitude";
import Aktivitetsplan from "./Aktivitetsplan/Aktivitetsplan";
import Dialog from "./Dialog/Dialog";

function getLocale(language: Language) {
  if (language === "en") {
    return "en-US";
  } else {
    return "nb-NO";
  }
}

const formatDate = (timestamp: string, language: Language): string => {
  const cleanedTimestamp = timestamp.replace(/(\.\d{3})\d*/, "$1");
  const date = new Date(cleanedTimestamp);

  if (isNaN(date.getTime())) {
    return "(fant ikke dato)";
  }

  const formatter = new Intl.DateTimeFormat(getLocale(language), {
    weekday: "long",
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
    loggBesok();
    VeilarboppfolgingApi.hentGjeldendeOppfolgingsperiode().then((response) => setTimestamp(response));
  }, []);

  const startTidspunkt = formatDate(timestamp, language);

  return (
    <Box borderRadius="xlarge" background="bg-default">
      <div className={styles.titlePadding}>
        <Heading size="small" className={styles.header}>
          {text.heading[language]}
        </Heading>
      </div>
      <div className={styles.padding}>
        <Dialog language={language} />
      </div>
      <div className={styles.padding}>
        <Aktivitetsplan language={language} />
      </div>
      <div className={styles.bottomPadding}>
        <BodyShort className={styles.bodyPadding}>{descriptionText(startTidspunkt).description[language]}</BodyShort>
        <ReadMore header={text.readMoreTittel[language]}>{text.readMoreInnhold[language]}</ReadMore>
      </div>
    </Box>
  );
};

export default ArbeidsrettetOppfolgingPanel;
