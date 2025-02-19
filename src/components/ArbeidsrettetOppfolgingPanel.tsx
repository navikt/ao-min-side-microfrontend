import styles from "./ArbeidsrettetOppfolgingPanel.module.css";
import { BodyShort, Heading, ReadMore } from "@navikt/ds-react";
import { LanguageContext } from "../language/LanguageProvider";
import { useContext, useEffect, useState } from "react";
import { text } from "../translations/text";
import { VeilarboppfolgingApi } from "../api/veilarboppfolging";

const ArbeidsrettetOppfolgingPanel = () => {
  const language = useContext(LanguageContext);
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    VeilarboppfolgingApi.hentGjeldendeOppfolgingsperiode().then((response) => setTimestamp(response));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading size="small" className={styles.heading}>
          {text(timestamp).card.heading[language]}
        </Heading>
      </div>
      <div className={styles.body}>
        <BodyShort className={styles.detail}>{text(timestamp).card.description[language]}</BodyShort>
        <ReadMore header={text(timestamp).card.readMoreTittel[language]}>
          {text(timestamp).card.readMoreInnhold[language]}
        </ReadMore>
      </div>
    </div>
  );
};

export default ArbeidsrettetOppfolgingPanel;
