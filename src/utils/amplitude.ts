import { getAmplitudeInstance } from "@navikt/nav-dekoratoren-moduler";

const logger = getAmplitudeInstance("dekoratoren");

//TODO: komponent må fylles ut med et identifiserende navn for microfrontend
export const logNavigereEvent = () => logger("navigere", { komponent: "ao-min-side-microfrontend" });
