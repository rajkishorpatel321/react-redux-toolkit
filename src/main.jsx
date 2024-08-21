import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import counterStore from "./Componentes/store/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>
);
