"use client";

import { useEffect, useState } from "react";

// Components
import CategoryItem from "./CategoryItem";
import ProductsCardList from "../Products/ProductsCardList";
import ShowAllLink from "./ShowAllLink";

// Images
import headphoneImage from "@/app/assets/images/headephone-category.png";

const categories = [
  {
    id: 1,
    name: "هدفون",
    image: headphoneImage,
  },
  {
    id: 2,
    name: "موبایل",
    image: headphoneImage,
  },
  {
    id: 3,
    name: "اسپیکر",
    image: headphoneImage,
  },
  {
    id: 4,
    name: "تبلت",
    image: headphoneImage,
  },
];

function TopProductsCategories({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const productsFilter = (id: number) => {
    switch (id) {
      case 1: {
        const newData = products.filter((product) => product.price < 50);
        setFilteredProducts(newData);
        break;
      }
      case 2: {
        const newData = products.filter(
          (product) => 50 < product.price && product.price < 100
        );
        setFilteredProducts(newData);
        break;
      }
      case 3: {
        const newData = products.filter(
          (product) => 100 < product.price && product.price < 200
        );
        setFilteredProducts(newData);

        break;
      }
      case 4: {
        const newData = products.filter((product) => 200 < product.price);
        setFilteredProducts(newData);

        break;
      }
      default: {
        setFilteredProducts(products);
      }
    }
  };

  const changeCategory = async (id: number) => {
    setSelectedCategory(id);
    productsFilter(id);
  };

  useEffect(() => productsFilter(1), []);

  return (
    <>
      <div className='w-full min-h-max p-2 overflow-x-auto flex lg:justify-center items-center gap-5 my-7'>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <CategoryItem
                selected={selectedCategory === category.id}
                name={category.name}
                image={category.image}
                onClick={() => changeCategory(category.id)}
              />
            </div>
          );
        })}

        <ShowAllLink />
      </div>

      <ProductsCardList products={filteredProducts} />
    </>
  );
}

export default TopProductsCategories;
