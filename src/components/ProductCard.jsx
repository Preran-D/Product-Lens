import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product, index }) => {

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index || 0) * 0.05 }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className='product-category'>{product.category}</p>
        <p className="product-description">{product.description}</p>


        <div className="product-price">${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}</div>

        <button className="add-to-cart-btn">
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};


export default ProductCard;