import Home from "./components/Home";
import Login from "./components/login/Login";
import NotFound from "./components/NotFound";
import "./App.scss";
import Products from "./components/Product/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import ProductLists from "./components/Product/ProductList/ProductLists";
import DetailedView from "./components/Product/DetailedView/DetailedView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />}>
            {/* <Route index element={<ProductLists />} /> */}
            <Route path="lists" element={<ProductLists />} />
            <Route path="lists/:id" element={<DetailedView />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
