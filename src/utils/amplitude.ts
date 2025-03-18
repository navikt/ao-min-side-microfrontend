import { getAmplitudeInstance } from "@navikt/nav-dekoratoren-moduler";

const logger = getAmplitudeInstance("dekoratoren");

//TODO: komponent må fylles ut med et identifiserende navn for microfrontend

export const loggBesok = () => logger("ao-min-side-microfrontend.besok", { komponent: "ao-min-side-microfrontend" });

export const logEvent = (data: string, kategori: string, lenketekst: string) => {
  logger("ao-min-side-microfrontend", { komponent: data, kategori: kategori, lenketekst: lenketekst }).catch(() =>
    console.warn("Uninitialized amplitude"),
  );
};
