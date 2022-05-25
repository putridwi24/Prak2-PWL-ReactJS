import "./productList.css"
import Product from "../product/Product"

const productList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">This is my Experiences </h1>
            <p className="pl-desc">
              no good project, still empty :") 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas voluptatum molestias, nisi quam natus tempore maiores quidem voluptates labore doloribus dicta sunt, laborum assumenda id, cumque vero nostrum! Quia, qui?
            </p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  );
}

export default productList;
