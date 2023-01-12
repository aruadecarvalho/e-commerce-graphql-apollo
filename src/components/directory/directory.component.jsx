import { CategoriesContainer } from "./directory.styles.jsx";
import { ComponentAnimation } from "../animations/animations.component.jsx";
import DirectoryItem from "../directory-item/directory-item.component";
import React from "react";
const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    route: "shop/hats",
  },

  {
    id: 2,
    title: "Jackets",
    imageUrl: "	https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Mens",
    imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
    route: "shop/mens",
  },
  {
    id: 4,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    route: "shop/sneakers",
  },
  {
    id: 5,
    title: "Womens",
    imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
    route: "shop/womens",
  },
];

const Directory = () => {
  return (
    <ComponentAnimation>
      <CategoriesContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </CategoriesContainer>
    </ComponentAnimation>
  );
};

export default Directory;
