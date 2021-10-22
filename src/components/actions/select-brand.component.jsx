import { useEffect } from "react";
import { connect } from "react-redux";

import { selectBrand } from "../../redux/categories/categories.action";

const SelectBrand = ({ categories, selectedCategory, selectBrand }) => {
  useEffect(() => {
    selectBrand(categories[0].brands[0].id);
  });

  return (
    <div>
      <select
        onChange={(event) => {
          selectBrand(parseInt(event.target.value));
        }}
      >
        {categories.map((category) =>
          category.id === selectedCategory
            ? category.brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))
            : ""
        )}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categoriesList,
  selectedCategory: state.categories.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  selectBrand: (category) => dispatch(selectBrand(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBrand);
