import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Main/>
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
