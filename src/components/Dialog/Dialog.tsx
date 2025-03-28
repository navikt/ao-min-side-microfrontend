import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./Dialog.module.css";
import { Language } from "../../language/LanguageProvider";
import { dialogMedVeilederUrl } from "../../utils/urls";
import { text } from "../../translations/text";
import { DialogPiktogram } from "./DialogPiktogram";
import { logNavigereEvent } from "../../utils/amplitude";

interface Props {
  language: Language;
}

const DialogVeileder = ({ language }: Props) => {
  return (
    <div className={styles.container}>
      <a href={dialogMedVeilederUrl} onClick={() => logNavigereEvent("dialog")}>
        <div className={styles.dialogPanel}>
          <div>
            <DialogPiktogram />
          </div>
          <div className={styles.textContainer}>
            <Heading size="xsmall" className={styles.heading}>
              {text.dialogTittel[language]}
            </Heading>
            <BodyLong className={styles.detail} size={"small"}>
              {text.dialogTekst[language]}
            </BodyLong>
          </div>
          <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
        </div>
      </a>
    </div>
  );
};

export default DialogVeileder;
