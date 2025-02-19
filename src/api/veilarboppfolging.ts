const veilarboppfolgingGraphqlUrl = "http://veilarboppfolging.poao/veilarboppfolging/api/graphql";

const query = `
  query($fnr: String!) {
    gjeldendeOppfolgingsperiode {
        startDato
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
    // headers: {
    //   ["Nav-Consumer-Id"]: "ao-min-side-microfrontend",
    //   Authorization: `Bearer ${token}`,
    //   ["Content-Type"]: "application/json",
    // },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente gjeldende oppfølgingsperiode: ${response.status}`);
  }

  return response.json();
};

export const VeilarboppfolgingApi = {
  hentGjeldendeOppfolgingsperiode,
};
