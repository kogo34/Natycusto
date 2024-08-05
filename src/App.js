import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"


import Navbar from "./component/navbar"
import Footer from "./component/footer";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import Setting from "./pages/setting";
import Order from "./pages/Order";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/order" element={<Order />} />
        </Routes>

      </div>
      <Footer />
    </Router>

  );
}

export default App;
