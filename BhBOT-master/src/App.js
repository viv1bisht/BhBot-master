import React, { useEffect } from "react";
import { Main } from "./pages";
import "./App.css";
import { UserContextProvider } from "./state_management/ContextAPI/UserContext";

const App = () => {
  useEffect(() => {
    document.title = "TechBrains Bharat-Bot";
  }, []);

  return (
    <UserContextProvider>
      <div>
        <Main />
      </div>
    </UserContextProvider>
  );
};

export default App;
