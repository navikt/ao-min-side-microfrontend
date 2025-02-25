import "@navikt/ds-css";
import ArbeidsrettetOppfolgingPanel from "./components/ArbeidsrettetOppfolgingPanel";
import { useEffect } from "react";
import { loadUmami } from "./utils/umamiTracker";

function App() {
  useEffect(() => {
    loadUmami()
      .then(() => {
        window.umami.track("Side lastet", { app: "ao-min-side-microfrontend" });
      })
      .catch((error) => console.error("Umami tracking error:", error));
  }, []);

  return (
    <section>
      <ArbeidsrettetOppfolgingPanel />
    </section>
  );
}

export default App;
