import { TestListSearchableCheckbox } from "./TestListSearchableCheckbox";
import { TestListSearchableInput } from "./TestListSearchableInput";
import { TestListSearchableRange } from "./TestListSearchableRange";

export function TestListSearchableSearchbar({
  stockOnly,
  stockOnlyChange,
  searchProduct,
  searchProductChange,
  searchPrice,
  searchPriceChange,
}: {
  stockOnly: boolean;
  stockOnlyChange: (v: boolean) => void;
  searchProduct: string;
  searchProductChange: (v: string) => void;
  searchPrice: string;
  searchPriceChange: (v: string) => void;
}) {
  console.log("TestListSearchableSearchbar");

  return (
    <>
      <TestListSearchableInput
        value={searchProduct}
        onChange={searchProductChange}
      />
      <TestListSearchableRange
        value={searchPrice}
        onChange={searchPriceChange}
      />
      <TestListSearchableCheckbox
        label="Only products in stock"
        checked={stockOnly}
        onChange={stockOnlyChange}
      />
    </>
  );
}
