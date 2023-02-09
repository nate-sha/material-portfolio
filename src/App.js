import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomeLayout from "./components/layout/HomeLayout";
import Header from "./components/sections/Header";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomeLayout>
        <Header />
        <Projects />
        <Certifications />
        <Education />
        <Skills />
      </HomeLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
