import { getAmplitudeInstance } from "@navikt/nav-dekoratoren-moduler";

const logger = getAmplitudeInstance("dekoratoren");

//TODO: komponent må fylles ut med et identifiserende navn for microfrontend

export const loggBesok = () => logger("ao-min-side-microfrontend.besok", { komponent: "ao-min-side-microfrontend" });
