import { useProducts } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products } = useProducts();

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;