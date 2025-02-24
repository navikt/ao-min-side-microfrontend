export const isDevEnvironment = (): boolean => {
  const { hostname } = window.location;
  return hostname.includes("intern.dev.nav.no");
};
