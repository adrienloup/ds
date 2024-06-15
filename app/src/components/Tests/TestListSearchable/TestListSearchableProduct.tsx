export function TestListSearchableProduct({
  product,
}: {
  product: { name: string; price: string; icon: string; stocked: boolean };
}) {
  const style = product.stocked ? undefined : { color: "red" };

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <div style={style}>
        {product.name}{" "}
        <span style={{ fontFamily: "initial" }}>{product.icon}</span>{" "}
        {product.price}
      </div>
    </div>
  );
}
