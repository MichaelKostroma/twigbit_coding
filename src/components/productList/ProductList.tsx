import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../productCard/ProductCard";
import { Product } from "../../types/Product";

interface ProductListProps {
  products: Product[];
  search: string;
}

const ProductList = ({ products, search }: ProductListProps) => {
  const filtered = useMemo(() => {
    return products.filter((item) => item.body.includes(search));
  }, [search]);

  return (
    <Grid container spacing={5}>
      {filtered.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default ProductList;
