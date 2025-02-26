import "@navikt/ds-css";
import ArbeidsrettetOppfolgingPanel from "./components/ArbeidsrettetOppfolgingPanel";
import { useEffect } from "react";
import { loadUmami } from "./utils/umamiTracker";
import { isDevEnvironment } from "./utils/envUtil";

function App() {
  useEffect(() => {
    if (isDevEnvironment()) {
      loadUmami().catch((error) => console.log("Umami feil:", error));
    }
  }, []);
  return (
    <section>
      <ArbeidsrettetOppfolgingPanel />
    </section>
  );
}

export default App;
