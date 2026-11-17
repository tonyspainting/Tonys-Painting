import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { captureEarlyInput, replayEarlyInput } from "./lib/replayEarlyInput";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Página pré-renderizada: o React "assume" o HTML que já está na tela (sem redesenhar),
// para não apagar o que o visitante já começou a digitar. /thank-you usa createRoot.
if (container.hasChildNodes()) {
  const typed = captureEarlyInput(container);
  hydrateRoot(container, app);
  replayEarlyInput(typed);
} else {
  createRoot(container).render(app);
}
