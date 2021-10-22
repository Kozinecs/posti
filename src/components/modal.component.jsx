import { connect } from "react-redux";

import {
  toggleModal,
  addElement,
  clearFields,
} from "../redux/categories/categories.action";

import AddProduct from "./actions/add-product.component";
import AddCategory from "./actions/add-category.component";
import AddBrand from "./actions/add-brand.component";

const Modal = ({ type, showModal, toggleModal, addElement, clearFields }) => {
  const getModalType = () => {
    switch (type) {
      case "category":
        return <AddCategory />;
      case "brand":
        return <AddBrand />;
      case "product":
        return <AddProduct />;
      default:
        return;
    }
  };

  const handleAdd = () => {
    addElement(type);
    clearFields();
    toggleModal(false);
  };

  const handleClose = () => {
    clearFields();
    toggleModal(false);
  };

  return (
    <div className={`modal ${showModal ? "active" : ""}`}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>Modal</h2>
          <button onClick={() => handleClose()}>X</button>
        </div>
        <div className="modal-content">
          {getModalType()}

          <div className="modal-actions">
            <button onClick={() => handleAdd(type)}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showModal: state.categories.showModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (showModal) => dispatch(toggleModal(showModal)),
  addElement: (type) => dispatch(addElement(type)),
  clearFields: () => dispatch(clearFields()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
