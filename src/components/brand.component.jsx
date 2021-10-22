import { connect } from "react-redux";

import { removeBrand } from "../redux/categories/categories.action";

import Product from "./product.component";

const Brand = ({ data: { name, products, id }, categoryId, removeBrand }) => {
  return (
    <div className="tree">
      <div className="title-with-button">
        <p>{name}</p>
        <button onClick={() => removeBrand(categoryId, id)}>Delete</button>
      </div>

      {products.map((product) => (
        <Product key={product.id} data={product} categoryId={categoryId} brandId={id} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeBrand: (categoryId, brandId) => dispatch(removeBrand(categoryId, brandId)),
});

export default connect(null, mapDispatchToProps)(Brand);
