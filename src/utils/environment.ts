export const isDevEnvironment = (): boolean => {
  const { hostname } = window.location;
  return hostname.includes("dev.nav.no");
};

export const isLocalEnvironment = (): boolean => {
  const { hostname } = window.location;
  return hostname.includes("localhost");
};

export const getEnv = () => {
  const { hostname } = window.location;
  if (hostname.includes("localhost")) return "dev";
  if (hostname.includes("intern.dev.nav.no")) return "dev";
  if (hostname.includes("ansatt.dev.nav.no")) return "dev";
  // if (hostname.includes("intern.nav.no")) return "prod"
  return "prod";
};
