import HomePage from "./pages/Home"
import ProductPage from "./pages/Product"
import { Routes, Route, Link } from "react-router-dom";

const App = () => {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>

    </>

  );
}

export default App;
