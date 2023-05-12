import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Category from "./category";
import NotFound from "./NotFound";

const Routers = () => {
    return <nav className="nav-container">
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/categories" element={<Category />} exact />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </nav>;
}
export default Routers;