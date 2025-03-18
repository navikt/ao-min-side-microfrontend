import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

//TODO: komponent må fylles ut med et identifiserende navn for microfrontend

// export const loggBesok = () => logger("ao-min-side-microfrontend.besok", { komponent: "ao-min-side-microfrontend" });
//
// export const logEvent = (data: string, kategori: string, lenketekst: string) => {
//   logger("ao-min-side-microfrontend", { komponent: data, kategori: kategori, lenketekst: lenketekst }).catch(() =>
//     console.warn("Uninitialized amplitude"),
//   );
// };

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
