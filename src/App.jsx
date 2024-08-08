import React from "react";
import { AppProvider } from "./Context";
import MainComponent from "./MainComponent";
const App = () => {
  return (
    <AppProvider>
      <MainComponent />
    </AppProvider>
  );
};

export default App;
