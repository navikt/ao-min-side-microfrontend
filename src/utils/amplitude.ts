import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

export const logBesokEvent = () => {
  logAmplitudeEvent({
    origin: "ao-min-side-microfrontend",
    eventName: "besok",
    eventData: {
      komponent: "ao-min-side-microfrontend",
    },
  });
};
export const logNavigereEvent = (tekst: string) => {
  logAmplitudeEvent({
    origin: "ao-min-side-microfrontend",
    eventName: "navigere",
    eventData: {
      komponent: "ao-min-side-microfrontend",
      tekst: tekst,
    },
  });
};
