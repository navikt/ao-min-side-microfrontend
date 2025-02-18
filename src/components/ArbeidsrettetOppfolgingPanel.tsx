import styles from "./ArbeidsrettetOppfolgingPanel.module.css";
import { BodyShort, Heading, ReadMore } from "@navikt/ds-react";
import { LanguageContext } from "../language/LanguageProvider";
import { useContext } from "react";
import { text } from "../translations/text";

const Komponent = () => {
  const language = useContext(LanguageContext);

  return (
    <div className={styles.box}>
      <div className={styles.headingDiv}>
        <Heading size="small" className={styles.heading}>
          {text.card.heading[language]}
        </Heading>
      </div>
      <div className={styles.infoDiv}>
        <BodyShort className={styles.detail}>{text.card.description[language]}</BodyShort>
        <ReadMore header={text.card.readMoreTittel[language]}>{text.card.readMoreInnhold[language]}</ReadMore>
      </div>
    </div>
  );
};

export default Komponent;
