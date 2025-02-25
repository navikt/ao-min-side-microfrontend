import "@navikt/ds-css";
import Komponent from "./components/ArbeidsrettetOppfolgingPanel";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.nav.no/team-researchops/sporing/sporing.js";
    script.defer = true;
    script.setAttribute("data-host-url", "https://umami.nav.no");
    script.setAttribute("data-website-id", "b0ce7216-d476-41d3-80c0-19a5f137d9f2");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section>
      <Komponent />
    </section>
  );
}

export default App;
