import { useProducts } from '../Context/ProductContext';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const { setSearchQuery } = useProducts();

  return (
    <div
      className="search-bar"
    >
      <div className="search-input-container">
        <FiSearch />
        <input
          type="text"
          placeholder="Search products..."
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;