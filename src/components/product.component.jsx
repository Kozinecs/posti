import { connect } from "react-redux";

import { removeProduct } from "../redux/categories/categories.action";

const Product = ({
  data: { name, id },
  removeProduct,
  categoryId,
  brandId,
}) => {
  return (
    <div className="tree">
      <div className="title-with-button">
        <p>{name}</p>
        <button onClick={() => removeProduct(categoryId, brandId, id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (categoryId, brandId, productId) =>
    dispatch(removeProduct(categoryId, brandId, productId)),
});

export default connect(null, mapDispatchToProps)(Product);
