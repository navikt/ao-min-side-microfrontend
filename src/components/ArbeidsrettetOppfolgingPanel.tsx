import styles from "./Komponent.module.css";
import { BodyShort, Heading, ReadMore } from "@navikt/ds-react";
import { LanguageContext } from "../language/LanguageProvider";
import { useContext } from "react";
import { text } from "../translations/text";
import LinkCard from "./card/LinkCard";

const Komponent = () => {
  const language = useContext(LanguageContext);
  const url = "";

  return (
    <LinkCard href={url}>
      <div>
        <Heading size="small" className={styles.heading}>
          {text.card.heading[language]}
        </Heading>
        <BodyShort className={styles.detail}>{text.card.description[language]}</BodyShort>
        <ReadMore header={text.card.readMoreTittel[language]}>{text.card.readMoreInnhold[language]}</ReadMore>
      </div>
    </LinkCard>
  );
};

export default Komponent;
