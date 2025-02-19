import styles from "./ArbeidsrettetOppfolgingPanel.module.css";
import { BodyShort, Heading, ReadMore } from "@navikt/ds-react";
import { LanguageContext } from "../language/LanguageProvider";
import { useContext, useEffect, useState } from "react";
import { text } from "../translations/text";
import { VeilarboppfolgingApi } from "../api/veilarboppfolging";

const ArbeidsrettetOppfolgingPanel = () => {
  const language = useContext(LanguageContext);
  const [dato, setDato] = useState<string | null>(null); // State for datoen
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOppfolgingsperiode = async () => {
      try {
        setLoading(true);
        // const token = "your-access-token"; // Erstatt med riktig token
        const result = await VeilarboppfolgingApi.hentGjeldendeOppfolgingsperiode();
        setDato(result.data.gjeldendeOppfolgingsperiode.startDato); // Sett datoen
      } catch (err) {
        setError("Kunne ikke hente oppfølgingsperiode.");
      } finally {
        setLoading(false);
      }
    };

    fetchOppfolgingsperiode();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading size="small" className={styles.heading}>
          {text.card.heading[language]}
        </Heading>
      </div>
      <div className={styles.body}>
        {loading && <BodyShort className={styles.detail}>Laster...</BodyShort>}
        {error && <BodyShort className={styles.detail}>{error}</BodyShort>}
        {dato && <BodyShort className={styles.detail}>Gjeldende oppfølgingsperiode starter: {dato}</BodyShort>}
        <ReadMore header={text.card.readMoreTittel[language]}>{text.card.readMoreInnhold[language]}</ReadMore>
      </div>
    </div>
  );
};

export default ArbeidsrettetOppfolgingPanel;
