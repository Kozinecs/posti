import { useEffect } from "react";
import { connect } from "react-redux";

import { selectCategory } from "../../redux/categories/categories.action";

const SelectCategory = ({ categories, selectCategory }) => {
  useEffect(() => {
    selectCategory(categories[0].id);
  });

  return (
    <div>
      <select
        onChange={(event) => {
          selectCategory(event.target.value);
        }}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categoriesList,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch(selectCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);
