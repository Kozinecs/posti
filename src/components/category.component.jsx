import { connect } from "react-redux";

import { removeCategory } from "../redux/categories/categories.action";

import Brand from "./brand.component";

const Category = ({ data: { name, id, brands }, removeCategory }) => {
  return (
    <div className="tree">
      <div class="title-with-button">
        <p>{name}</p> <button onClick={() => removeCategory(id)}>Delete</button>
      </div>
      {brands.map((brand) => (
        <Brand key={brand.id} data={brand} categoryId={id} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCategory: (id) => dispatch(removeCategory(id)),
});

export default connect(null, mapDispatchToProps)(Category);
