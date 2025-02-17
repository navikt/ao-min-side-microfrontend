import { useState } from "react";
// import { VeilarboppfolgingApi } from "../api/veilarboppfolging";

export default function OppfolgingPanel() {
  const [isOpen, setIsOpen] = useState(false);

  // const startDato = VeilarboppfolgingApi.hentGjeldendeOppfolgingsperiode("123456789", "token").then((response) => { });

  return (
    <div className="border rounded-lg p-4 shadow-md w-full max-w-md bg-white">
      <h2 className="text-lg font-semibold">Du er registrert for arbeidsrettet oppfølging</h2>
      <p className="text-gray-700">Nav registrerte deg for arbeidsrettet oppfølging torsdag .</p>

      <button className="text-blue-600 mt-2 hover:underline focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▲ Slik brukte vi personopplysningene dine" : "▼ Slik brukte vi personopplysningene dine"}
      </button>

      {isOpen && (
        <div className="mt-2 p-2 border-l-4 border-blue-500 bg-gray-100 text-gray-700">
          <p>
            Da vi registrerte deg behandlet vi opplysninger om din alder, adresse og om du har lovlig opphold i Norge.
            Dette gjorde vi for å være sikre på at du har krav på oppfølging, og for at du skal få oppfølging fra riktig
            Nav-kontor. Denne behandlingen er basert på Nav-loven § 14a.
          </p>
        </div>
      )}
    </div>
  );
}
