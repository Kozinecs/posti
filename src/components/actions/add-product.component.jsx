import SelectBrand from "./select-brand.component";
import SelectCategory from "./select-category.component";
import SetProductName from './set-product-name.component';

const AddProduct = () => {
  return (
    <div>
      <SelectCategory />
      <SelectBrand />
      <SetProductName />
    </div>
  );
};

export default AddProduct;
