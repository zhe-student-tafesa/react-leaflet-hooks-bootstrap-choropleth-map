import React from "react";
import "./App.css";
import Covid19 from "./components/Covid19";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Covid19 />
      </div>
    </Provider>
  );
}

export default App;
