import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import {
  CategoryBody,
  CategoryContainer,
  CategoryTitle,
} from "./category.styles.jsx";
import ProductCard from "../../components/product-card/product-card.component";
import { ComponentAnimation } from "../../components/animations/animations.component";
import Spinner from "../../components/spinner/spinner.component";

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();

  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: {
      title: category,
    },
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;

      setProducts(items);
    }
  }, [category, data]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ComponentAnimation>
          <CategoryContainer>
            <CategoryTitle>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryTitle>
            <CategoryBody>
              {products &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </CategoryBody>
          </CategoryContainer>
        </ComponentAnimation>
      )}
    </>
  );
};

export default Category;
