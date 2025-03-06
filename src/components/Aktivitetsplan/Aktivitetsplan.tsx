import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./Aktivitetsplan.module.css";
import { Language } from "../../language/LanguageProvider";
import { aktivitetsplanUrl } from "../../utils/urls";
import { text } from "../../translations/text";
import { AktivitetsplanPiktogram } from "./AktivitetsplanPiktogram";

interface Props {
  language: Language;
}

const Aktivitetsplan = ({ language }: Props) => {
  return (
    <a className={styles.container} href={aktivitetsplanUrl}>
      <div className={styles.aktivitetsplanPanel}>
        <div>
          <AktivitetsplanPiktogram />
        </div>
        <div className={styles.textContainer}>
          <Heading size="xsmall" className={styles.heading}>
            {text.aktivitetsplanTittel[language]}
          </Heading>
          <BodyLong className={styles.detail} size={"small"}>
            {text.aktivitetsplanTekst[language]}
          </BodyLong>
        </div>
        <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
      </div>
    </a>
  );
};

export default Aktivitetsplan;
