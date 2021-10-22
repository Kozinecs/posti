import { connect } from "react-redux";

import { setNewProductName } from "../../redux/categories/categories.action";

const SetProductName = ({ setNewProductName, productName }) => {
  return (
    <span className="field">
      <label htmlFor="product-name">Product name</label>
      <input
        id="product-name"
        type="text"
        value={productName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
    </span>
  );
};

const mapStateToProps = (state) => ({
  productName: state.categories.productName,
});

const mapDispatchToProps = (dispatch) => ({
  setNewProductName: (name) => dispatch(setNewProductName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetProductName);
