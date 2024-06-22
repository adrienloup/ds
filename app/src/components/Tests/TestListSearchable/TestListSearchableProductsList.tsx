import { TestListSearchableCategory } from "./TestListSearchableCategory";
import { TestListSearchableProduct } from "./TestListSearchableProduct";

export function TestListSearchableProductsList({
  products,
}: {
  products: {
    category: string;
    name: string;
    icon: string;
    price: string;
    stocked: boolean;
  }[];
}) {
  console.log("TestListSearchableProductsList");

  const categories: string[] = [];
  const singleCategories: string[] = [];
  const categoriesAndProducts: JSX.Element[] = [];
  let lastCategory: string = "";

  for (const product of products) {
    if (product.category !== lastCategory) {
      categories.push(product.category);
    }
    lastCategory = product.category;
  }

  for (const category of categories) {
    if (!singleCategories.includes(category)) {
      singleCategories.push(category);
    }
  }

  for (let i = 0; i < singleCategories.length; i++) {
    categoriesAndProducts.push(
      <TestListSearchableCategory
        key={singleCategories[i]}
        name={singleCategories[i]}
      />
    );
    for (let j = 0; j < products.length; j++) {
      if (products[j].category === singleCategories[i]) {
        categoriesAndProducts.push(
          <TestListSearchableProduct
            key={products[j].name}
            product={products[j]}
          />
        );
      }
    }
  }

  return categoriesAndProducts;
}
