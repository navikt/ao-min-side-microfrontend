interface GjeldendeOppfolgingsperiode {
  data: {
    gjeldendeOppfolgingsperiode: {
      tidspunkt: string;
    };
  };
}

const veilarboppfolgingGraphqlUrl = "https://veilarboppfolging.poao/veilarboppfolging/api/graphql";

const query = `
  query($fnr: String!) {
    gjeldendeOppfolgingsperiode {
        tidspunkt
    }
  }
`;

const graphqlBody = () => ({
  query,
  variables: {
    fnr: null,
  },
});

const hentGjeldendeOppfolgingsperiode = async () => {
  const response = await fetch(veilarboppfolgingGraphqlUrl, {
    body: JSON.stringify(graphqlBody()),
    headers: {
      ["Nav-Consumer-Id"]: "ao-min-side-microfrontend",
      ["Content-Type"]: "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente gjeldende oppfølgingsperiode: ${response.status}`);
  }

  return ((await response.json()) as GjeldendeOppfolgingsperiode).data.gjeldendeOppfolgingsperiode.tidspunkt;
};

export const VeilarboppfolgingApi = {
  hentGjeldendeOppfolgingsperiode,
};
