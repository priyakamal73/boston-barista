import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ClickSpark from "./components/Click Spark/ClickSpark.jsx";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js";
import Loader from "./components/Loader/Loader.jsx";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Provider store={store}>
          {loading ? <Loader /> : <App />}
        </Provider>
      </ClickSpark>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);