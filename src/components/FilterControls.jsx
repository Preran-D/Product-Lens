import { useProducts } from '../Context/ProductContext';

const FilterControls = () => {
  const { setFilter, setSortOrder } = useProducts();

  return (
    <>
      <select
        className="filter-select"
        onChange={e => setFilter(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      
      <select
        className="filter-select"
        onChange={e => setSortOrder(e.target.value)}
      >
        <option value="none">Sort By</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </>
  );
};

export default FilterControls;

