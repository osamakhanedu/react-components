import React from "react";
import Provider from "./Provider";
import "./App.css";
import Button, { LargeButton } from "./components/Button";

function App() {
  return (
    <Provider>
      <Button>Make Coffee</Button>
    </Provider>
  );
}

export default App;
