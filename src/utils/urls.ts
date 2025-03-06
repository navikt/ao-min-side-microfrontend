import { getEnv } from "./environment";

const DIALOG_MED_VEILEDER_URL = {
  local: "https://pto.ekstern.dev.nav.no/arbeid/dialog",
  dev: "https://pto.ekstern.dev.nav.no/arbeid/dialog",
  prod: "https://www.nav.no/arbeid/dialog",
};

const AKTIVITETSPLAN_URL = {
  local: "https://aktivitetsplan.ekstern.dev.nav.no/",
  dev: "https://aktivitetsplan.ekstern.dev.nav.no/",
  prod: "https://aktivitetsplan.nav.no/",
};

export const dialogMedVeilederUrl = DIALOG_MED_VEILEDER_URL[getEnv()];
export const aktivitetsplanUrl = AKTIVITETSPLAN_URL[getEnv()];
