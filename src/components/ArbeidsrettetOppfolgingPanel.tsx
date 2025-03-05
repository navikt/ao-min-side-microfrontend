import styles from "./ArbeidsrettetOppfolgingPanel.module.css";
import { BodyLong, BodyShort, Heading, ReadMore } from "@navikt/ds-react";
import { Language, LanguageContext } from "../language/LanguageProvider";
import { useContext, useEffect, useState } from "react";
import { headingText, descriptionText, readMoreInnholdText, readMoreTittelText } from "../translations/text";
import { VeilarboppfolgingApi } from "../api/veilarboppfolging";
import { loggBesok } from "../utils/amplitude";
import { ChevronRightIcon } from "@navikt/aksel-icons";

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
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading size="small" className={styles.heading}>
          {headingText().heading[language]}
        </Heading>
      </div>
      <div className={styles.body}>
        <BodyShort className={styles.detail}>{descriptionText(startTidspunkt).description[language]}</BodyShort>
        <ReadMore header={readMoreTittelText().readMoreTittel[language]}>
          {readMoreInnholdText().readMoreInnhold[language]}
        </ReadMore>
      </div>
      <div className={styles.body}>
        <div className={styles.headerContainer}>
          <Heading size="xsmall" level="2">
            {/*{text.aktivitetsplanTittel[language]}*/}
            Aktivitetsplan
          </Heading>
          <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
        </div>
        <BodyLong className={styles.text}>
          I aktivitetsplanen holder du oversikt over det du gjør for å komme i jobb eller annen aktivitet.
        </BodyLong>
      </div>
      <div className={styles.body}>
        <div className={styles.headerContainer}>
          <Heading size="xsmall" level="2">
            Dialog med veilederen din
          </Heading>
          <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
        </div>
        <BodyLong className={styles.text}>
          Du som får arbeidsoppfølging kan kontakte veilederen din her om oppfølging, for eksempel avtalte møter,
          aktiviteter og tiltak.
        </BodyLong>
      </div>
    </div>
  );
};

export default ArbeidsrettetOppfolgingPanel;
