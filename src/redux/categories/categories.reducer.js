import {
  CATEGORIES_LIST, SELECT_CATEGORY, NEW_PRODUCT_NAME, SELECT_BRAND, SHOW_MODAL, ADD_PRODUCT,
  NEW_CATEGORY_NAME, NEW_BRAND_NAME, CLEAR_FIELDS,
  REMOVE_BRAND, REMOVE_CATEGORY, REMOVE_PRODUCT
} from './categories.types';

const INITIAL_STATE = {
  categoriesList: [],
  selectedCategory: '',
  selectedBrand: '',
  productName: '',
  categoryName: '',
  brandName: '',
  showModal: false,
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_LIST:
      return {
        ...state,
        categoriesList: action.payload
      }
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }
    case SELECT_BRAND:
      return {
        ...state,
        selectedBrand: action.payload
      }
    case NEW_PRODUCT_NAME:
      return {
        ...state,
        productName: action.payload
      }
    case NEW_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.payload
      }
    case NEW_BRAND_NAME:
      return {
        ...state,
        brandName: action.payload
      }
    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        categoriesList: action.payload
      }
    case REMOVE_BRAND:
      return {
        ...state,
        categoriesList: action.payload
      }
    case REMOVE_CATEGORY:
      return {
        ...state,
        categoriesList: action.payload
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        categoriesList: action.payload
      }
    case CLEAR_FIELDS:
      return {
        ...state,
        categoryName: '',
        productName: '',
        brandName: '',
      }
    default:
      return state;
  }
}

export default categoriesReducer