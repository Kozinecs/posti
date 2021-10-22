import { useEffect, useState } from "react";

import Category from "../components/category.component";
import Modal from "../components/modal.component";

import { connect } from "react-redux";
import { getCategoriesList, toggleModal } from "../redux/categories/categories.action";

const MainPage = ({ getCategoriesList, categories, toggleModal }) => {
  const [actionType, setActionType] = useState('');

  useEffect(() => {
    getCategoriesList();
  }, [getCategoriesList]);

  const handleButtons = (type) => {
    setActionType(type);
    toggleModal(true);
  }

  return (
    <section>
      <div class="actions">
        <p>Actions</p>
        <button onClick={() => handleButtons('category')}>Add Category</button>
        <button onClick={() => handleButtons('brand')}>Add Brand</button>
        <button onClick={() => handleButtons('product')}>Add Product</button>
      </div>
      <div className="tree-container">
        {categories &&
          categories.map((category) => (
            <Category key={category.id} data={category} />
          ))}
      </div>
      <Modal type={actionType}/>
    </section>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categoriesList,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoriesList: () => dispatch(getCategoriesList()),
  toggleModal: (showModal) => dispatch(toggleModal(showModal))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
