import { Route, Routes } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components";
import { Home, Map, MapSchoolId, About, MobileApp, ErrorPage } from "./pages";

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/map" element={<Map/> } >
          <Route path=":id" element={<MapSchoolId />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
