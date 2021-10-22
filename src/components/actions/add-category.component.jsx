import { connect } from "react-redux";

import { setNewCategoryName } from "../../redux/categories/categories.action";

const AddCategory = ({ setNewCategoryName, categoryName }) => {
  return (
    <span className="field">
      <label htmlFor="category-name">Add category</label>
      <input
        id="category-name"
        type="text"
        value={categoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
      />
    </span>
  );
};

const mapStateToProps = (state) => ({
  categoryName: state.categories.categoryName,
});

const mapDispatchToProps = (dispatch) => ({
  setNewCategoryName: (name) => dispatch(setNewCategoryName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
