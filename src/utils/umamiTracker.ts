interface Umami {
    track(payload: unknown): void;
    track(event_name: string, payload: unknown): void;
    identify(session_data: unknown): void;
}

declare global {
    interface Window {
        umami?: Umami;
    }
}

export const trackHelpTextClicked = (name: string) => {
  if (!window.umami) {
    console.warn('Umami is not initialized. Ignoring');
    return;
  }
  window.umami.track('dialogboks åpnet', {
    tekst: name
  });
};

export const trackLinkClicked = (name: string, url: string) => {
  if (!window.umami) {
    console.warn('Umami is not initialized. Ignoring');
    return;
  }
  window.umami.track('navigasjon klikket', {
    tekst: name,
    url: url
  });
}

export function loadUmami(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.umami) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.nav.no/team-researchops/sporing/sporing.js";
    script.defer = true;
    script.setAttribute("data-host-url", "https://umami.nav.no");
    script.setAttribute("data-website-id", "b0ce7216-d476-41d3-80c0-19a5f137d9f2");
    script.setAttribute("data-tag", "ao-min-side-microfrontend");

    script.onload = () => {
      if (window.umami) {
        resolve();
      } else {
        reject(new Error("Umami script loaded but window.umami is undefined"));
      }
    };

    script.onerror = () => reject(new Error("Failed to load Umami script"));

    document.head.appendChild(script);
  });
}
