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
    expect(screen.getByText("Arbeidsrettet oppfølging")).toBeDefined();
  });

  it("should have a description", async () => {
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText(/Nav registrerte deg for arbeidsrettet oppfølging/)).toBeDefined();
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

  it("should have dialog title", async () => {
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText(/Dialog med veilederen din/)).toBeDefined();
  });

  it("should have aktivitetsplan title", async () => {
    await act(async () => {
      render(<ArbeidsrettetOppfolgingPanel />);
    });
    expect(screen.getByText(/Aktivitetsplan/)).toBeDefined();
  });
});
