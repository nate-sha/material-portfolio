import * as React from "react";
import HomeLayout from "./components/layout/HomeLayout";
import Header from "./components/sections/Header";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";

function App() {
  return (
    <HomeLayout>
      <Header />
      <Projects />
      <Certifications />
      <Education />
      <Skills />
    </HomeLayout>
  );
}

export default App;
