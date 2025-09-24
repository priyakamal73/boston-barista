import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ClickSpark from "./components/Click Spark/ClickSpark.jsx";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ClickSpark>
  </StrictMode>
);
