import styles from "./ArbeidsrettetOppfolgingPanel.module.css";
import { BodyShort, Heading, ReadMore } from "@navikt/ds-react";
import { LanguageContext } from "../language/LanguageProvider";
import { useContext } from "react";
import { text } from "../translations/text";

const ArbeidsrettetOppfolgingPanel = () => {
  const language = useContext(LanguageContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading size="small" className={styles.heading}>
          {text.card.heading[language]}
        </Heading>
      </div>
      <div className={styles.body}>
        <BodyShort className={styles.detail}>{text.card.description[language]}</BodyShort>
        <ReadMore header={text.card.readMoreTittel[language]}>{text.card.readMoreInnhold[language]}</ReadMore>
      </div>
    </div>
  );
};

export default ArbeidsrettetOppfolgingPanel;
