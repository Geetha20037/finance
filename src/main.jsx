import { StrictMode, useCallback, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

function Root() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      <App />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);


