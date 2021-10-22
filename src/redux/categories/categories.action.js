import {
  CATEGORIES_LIST, SELECT_CATEGORY, NEW_PRODUCT_NAME, SELECT_BRAND,
  SHOW_MODAL, ADD_PRODUCT, NEW_CATEGORY_NAME, NEW_BRAND_NAME, CLEAR_FIELDS,
  REMOVE_BRAND, REMOVE_CATEGORY, REMOVE_PRODUCT
} from './categories.types';
import * as defaultData from '../../data/responseData.json';

import cloneDeep from 'lodash.clonedeep';
import { v4 as uuid } from 'uuid';

import store from '../store';

export const getCategoriesList = () => {
  const categoriesData = JSON.parse(localStorage.getItem("categoriesData"));

  if (categoriesData) {
    return {
      type: CATEGORIES_LIST,
      payload: [...categoriesData]
    }

  } else {
    localStorage.setItem("categoriesData", JSON.stringify(defaultData.categories))

    return {
      type: CATEGORIES_LIST,
      payload: [...defaultData.categories]
    }
  }
}

export const addElement = (type) => {
  const id = Math.floor(Math.random() * 99999);
  const categoriesList = cloneDeep(store.getState().categories.categoriesList);
  const selectedCategory = store.getState().categories.selectedCategory;
  const selectBrand = store.getState().categories.selectBrand;
  const productName = store.getState().categories.productName;
  const categoryName = store.getState().categories.categoryName;
  const brandName = store.getState().categories.brandName;

  const addCategory = () => {
    categoriesList.push({
      id: uuid(),
      name: categoryName,
      brands: []
    })
  }

  const addBrand = () => {
    categoriesList.forEach(category => {
      if (category.id === selectedCategory) {
        const brandId = category.brands.length + 1;

        category.brands.push({
          id: brandId,
          name: brandName,
          products: [],
        })
      }
    })
  }

  const addProduct = () => {
    categoriesList.forEach(category => {
      if (category.id === selectedCategory) {
        category.brands.forEach(brand => {
          if (brand.id === selectBrand) {
            brand.products.push({
              id: id,
              name: productName
            })
          }
        })
      }
    })
  }

  if (type === 'category') {
    addCategory();
  } else if (type === 'brand') {
    addBrand();
  } else if (type === 'product') {
    addProduct();
  }

  localStorage.setItem("categoriesData", JSON.stringify(categoriesList))

  return {
    type: ADD_PRODUCT,
    payload: [...categoriesList]
  }
}

export const removeCategory = (categoryId) => {
  const categoriesList = store.getState().categories.categoriesList;
  const filteredList = categoriesList.filter((category) => category.id !== categoryId);

  localStorage.setItem("categoriesData", JSON.stringify(filteredList))

  return {
    type: REMOVE_CATEGORY,
    payload: [...filteredList]
  }
}

export const removeBrand = (categoryId, brandId) => {
  const categoriesList = cloneDeep(store.getState().categories.categoriesList);
  const filteredList = categoriesList.map(
    category => {
      if (category.id === categoryId) {
        category.brands = category.brands.filter((brand) => brand.id !== brandId);
      }

      return category
    });

  localStorage.setItem("categoriesData", JSON.stringify(filteredList))

  return {
    type: REMOVE_BRAND,
    payload: [...filteredList],
  }
}

export const removeProduct = (categoryId, brandId, productId) => {
  const categoriesList = cloneDeep(store.getState().categories.categoriesList);
  const filteredList = categoriesList.map(
    category => {
      if (category.id === categoryId) {
        category.brands.map((brand) => {
          if (brand.id === brandId) {
            brand.products = brand.products.filter((product) => product.id !== productId)
          }

          return brand
        })
      }

      return category
    });

  localStorage.setItem("categoriesData", JSON.stringify(filteredList))

  return {
    type: REMOVE_PRODUCT,
    payload: [...filteredList],
  }
}


export const selectCategory = (categoryId) => {
  return {
    type: SELECT_CATEGORY,
    payload: categoryId
  }
}

export const selectBrand = (brandId) => ({
  type: SELECT_BRAND,
  payload: brandId
})

export const setNewProductName = (name) => ({
  type: NEW_PRODUCT_NAME,
  payload: name
})

export const setNewCategoryName = (name) => ({
  type: NEW_CATEGORY_NAME,
  payload: name
})

export const setNewBrandName = (name) => ({
  type: NEW_BRAND_NAME,
  payload: name
})

export const toggleModal = (showModal) => ({
  type: SHOW_MODAL,
  payload: showModal
})

export const clearFields = () => {
  return {
    type: CLEAR_FIELDS
  }
}