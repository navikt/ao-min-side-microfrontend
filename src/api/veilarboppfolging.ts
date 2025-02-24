import { isDevEnvironment } from "../utils/envUtil";

interface GjeldendeOppfolgingsperiode {
  data: {
    gjeldendeOppfolgingsperiode: {
      startTidspunkt: string;
    };
  };
}

const veilarbOppfolgingPath = "/veilarboppfolging/api/graphql";
const devBasePath = "https://ao-min-side-microfrontend.intern.dev.nav.no";
const prodBasePath = "https://ao-min-side-microfrontend.nav.no";

const getVeilarbOppfolgingUrl = () => {
  if (isDevEnvironment()) {
    return `${devBasePath}${veilarbOppfolgingPath}`;
  } else {
    return `${prodBasePath}${veilarbOppfolgingPath}`;
  }
};

const query = `
  query {
    gjeldendeOppfolgingsperiode {
        startTidspunkt
    }
  }
`;

const graphqlBody = () => ({
  query,
  variables: {},
});

const hentGjeldendeOppfolgingsperiode = async () => {
  const response = await fetch(getVeilarbOppfolgingUrl(), {
    body: JSON.stringify(graphqlBody()),
    headers: {
      ["Nav-Consumer-Id"]: "ao-min-side-microfrontend",
      ["Content-Type"]: "application/json",
    },
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente gjeldende oppfølgingsperiode: ${response.status}`);
  }

  return ((await response.json()) as GjeldendeOppfolgingsperiode).data.gjeldendeOppfolgingsperiode.startTidspunkt;
};

export const VeilarboppfolgingApi = {
  hentGjeldendeOppfolgingsperiode,
};
