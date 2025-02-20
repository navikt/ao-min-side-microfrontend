interface GjeldendeOppfolgingsperiode {
  data: {
    gjeldendeOppfolgingsperiode: {
      tidspunkt: string;
    };
  };
}

const veilarboppfolgingGraphqlUrl = "https://ao-min-side-microfrontend.intern.dev.nav.no/veilarboppfolging/api/graphql";

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
  const response = await fetch(veilarboppfolgingGraphqlUrl, {
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

  return ((await response.json()) as GjeldendeOppfolgingsperiode).data.gjeldendeOppfolgingsperiode.tidspunkt;
};

export const VeilarboppfolgingApi = {
  hentGjeldendeOppfolgingsperiode,
};
