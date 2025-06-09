import { useProducts } from "../Context/ProductContext";

const Pagination = () => {
  const { totalProducts, itemsPerPage, currentPage, setCurrentPage } = useProducts();
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;