import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ComponentAnimation } from "../../components/animations/animations.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <ComponentAnimation key={title}>
              <CategoryPreview title={title} products={products} />
            </ComponentAnimation>
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
