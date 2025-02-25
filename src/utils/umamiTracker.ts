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
