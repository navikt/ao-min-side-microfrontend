import "@navikt/ds-css";
import ArbeidsrettetOppfolgingPanel from "./components/ArbeidsrettetOppfolgingPanel";
import { useEffect } from "react";
import { loadUmami } from "./utils/umamiTracker";
import { isDevEnvironment } from "./utils/envUtil";

function App() {
  if (isDevEnvironment()) {
    useEffect(() => {
      loadUmami()
        .then(() => {})
        .catch((error) => console.error("Umami tracking error:", error));
    }, []);
  }
  return (
    <section>
      <ArbeidsrettetOppfolgingPanel />
    </section>
  );
}

export default App;
