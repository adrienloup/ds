import { useState } from "react";
import { TestListSearchableProductsList } from "./TestListSearchableProductsList";
import { TestListSearchableSearchbar } from "./TestListSearchableSearchbar";

export function TestListSearchable() {
  console.log("TestListSearchable");

  const LIST_SEARCHABLE_PRODUCTS = [
    {
      category: "Fruits",
      name: "Apple",
      icon: "🍏",
      price: "$1",
      stocked: true,
    },
    {
      category: "Fruits",
      name: "Passionfruit",
      icon: "🥭",
      price: "$2",
      stocked: false,
    },
    {
      category: "Vegetables",
      name: "Spinach",
      icon: "🥬",
      price: "$2",
      stocked: true,
    },
    {
      category: "Fruits",
      name: "Dragonfruit",
      icon: "🍠",
      price: "$1",
      stocked: true,
    },
    {
      category: "Fruits",
      name: "Bananas",
      icon: "🍌",
      price: "$2",
      stocked: true,
    },
    {
      category: "Vegetables",
      name: "Pear",
      icon: "🍐",
      price: "$3",
      stocked: false,
    },
    {
      category: "Fruits",
      name: "Strawberries",
      icon: "🍓",
      price: "$4",
      stocked: true,
    },
    {
      category: "Vegetables",
      name: "Peas",
      icon: "🫛",
      price: "$1",
      stocked: true,
    },
  ];

  const [stockOnly, setStockOnly] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [searchPrice, setSearchPrice] = useState("5");

  const productsFiltered = LIST_SEARCHABLE_PRODUCTS.filter((product) => {
    if (stockOnly && !product.stocked) {
      return false;
    }
    if (
      searchProduct &&
      !product.name.toLocaleLowerCase().includes(searchProduct)
    ) {
      return false;
    }
    if (product.price.split("")[1] > searchPrice) {
      return false;
    }
    return true;
  });

  return (
    <>
      <TestListSearchableSearchbar
        searchProduct={searchProduct}
        searchProductChange={setSearchProduct}
        stockOnly={stockOnly}
        stockOnlyChange={setStockOnly}
        searchPrice={searchPrice}
        searchPriceChange={setSearchPrice}
      />
      <TestListSearchableProductsList products={productsFiltered} />
      {productsFiltered.length === 0 && (
        <div style={{ marginTop: "1rem" }}>No product</div>
      )}
    </>
  );
}
