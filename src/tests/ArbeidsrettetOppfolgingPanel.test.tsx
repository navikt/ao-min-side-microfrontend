import { render, screen } from "../utils/test-utils";
import ArbeidsrettetOppfolgingPanel from "../components/ArbeidsrettetOppfolgingPanel";
import { VeilarboppfolgingApi } from "../api/veilarboppfolging";
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";

describe("Tests for ArbeidsrettetOppfolgingPanel", () => {
  it("should have a headline", async () => {
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText("Du har startet på arbeidsrettet oppfølging")).toBeDefined();
  });

  it("should have a description", async () => {
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText(/Nav startet deg på arbeidsrettet oppfølging/)).toBeDefined();
  });

  it("description should show date", async () => {
    VeilarboppfolgingApi.hentGjeldendeOppfolgingsperiode = async () => "2025-01-01T12:00:00";

    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });

    await waitFor(() => {
      expect(screen.getByText(/onsdag 1. januar 2025/)).toBeDefined();
    });
  });

  it("error fetching date should display missing message", async () => {
    VeilarboppfolgingApi.hentGjeldendeOppfolgingsperiode = async () => "";
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText(/(fant ikke dato)/)).toBeDefined();
  });

  it("should have a read more title", async () => {
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText("Slik brukte vi personopplysningene dine")).toBeDefined();
  });

  it("should have a read more content", async () => {
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText(/Da vi registrerte deg behandlet vi opplysninger om din alder/)).toBeDefined();
  });
});
