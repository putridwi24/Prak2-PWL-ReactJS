import About from "./component/about/About";
import Contact from "./component/contact/Contact"
import Intro from "./component/intro/intro";
import ProductList from "./component/productList/productList"

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;
