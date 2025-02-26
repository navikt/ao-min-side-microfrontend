export const isDevEnvironment = (): boolean => {
  const { hostname } = window.location;
  return hostname.includes("dev.nav.no");
};

export const isLocalEnvironment = (): boolean => {
  const { hostname } = window.location;
  return hostname.includes("localhost");
};
