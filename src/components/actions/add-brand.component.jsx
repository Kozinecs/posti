import { connect } from "react-redux";

import { setNewBrandName } from "../../redux/categories/categories.action";

import SelectCategory from "./select-category.component";

const AddBrand = ({setNewBrandName, brandName}) => {
  return (
    <div>
      <SelectCategory />
      <span className="field">
        <label htmlFor="category-name">Add brand</label>
        <input
          id="category-name"
          type="text"
          value={brandName}
          onChange={(e) => setNewBrandName(e.target.value)}
        />
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  brandName: state.categories.brandName,
});

const mapDispatchToProps = (dispatch) => ({
  setNewBrandName: (name) => dispatch(setNewBrandName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBrand);

