import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./components/navbar/navbar";
import Router from "./router/router";
import { useState } from "react";
import { LanguageContext } from "./context/language";



function App() {
  const [contextLang, setContextLang] = useState("EN");
  return (
    <BrowserRouter>
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          <HeaderNav />
            <div className='container mt-5 pt-5'>
              <Router/>

            </div>
        </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
