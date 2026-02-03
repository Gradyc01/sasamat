
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PropertyLayout from "./pages/PropertyLayout";
import MainLayout from "./layouts/MainLayout";
import StockLayout from "./layouts/StockLayout";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";

function App() {

  return (
    <div className="">
      
      <HashRouter>
      <ScrollToTop />  
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
        <Route element={<StockLayout />}>
          <Route path="property-details" element={<PropertyLayout />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App
