import "@navikt/ds-css";
import Komponent from "./components/ArbeidsrettetOppfolgingPanel";
import { Helmet } from "react-helmet";

function App() {
  return (
    <section>
      <Helmet>
        <script
          defer
          src="https://cdn.nav.no/team-researchops/sporing/sporing.js"
          data-host-url="https://umami.nav.no"
          data-website-id="b0ce7216-d476-41d3-80c0-19a5f137d9f2"
        ></script>
      </Helmet>
      <Komponent />
    </section>
  );
}

export default App;
