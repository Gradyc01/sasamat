
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <div className="">
      <HashRouter>
        <Routes>
          {/* Default (redirect or 404) */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App
