import React from "react";
import PageRouting from "./routes";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PageRouting />
    </Provider>
  );
}

export default App;
