import React from "react";
import "./App.css";
import MSADashboard from "./components/dashboard/MSADashboard";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <MSADashboard />
      </div>
    </Provider>
  );
}

export default App;
