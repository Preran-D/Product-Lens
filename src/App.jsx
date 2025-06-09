import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ProductProvider } from './Context/ProductContext';
import { ThemeProvider } from './Context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import { FiShoppingBag } from 'react-icons/fi'

const ProductGrid = lazy(() => import('./components/ProductGrid'));
const FilterControls = lazy(() => import('./components/FilterControls.jsx'));
const Pagination = lazy(() => import('./components/Pagination'));
const SearchBar = lazy(() => import('./components/SearchBar.jsx'));

const App = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <ThemeProvider>
      <ProductProvider>
        <div className="app">
          <motion.header 
            className="app-header"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h1 className="logo">
              <FiShoppingBag /> Products Lens
            </h1>
            <ThemeToggle />
          </motion.header>

          <Suspense fallback={<div>Loading...</div>}>
            <motion.div
              className="search-filter-controls-wrapper"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <SearchBar />
              <FilterControls />
            </motion.div>

            <motion.div
              custom={2.5}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <ProductGrid />
            </motion.div>

            <motion.div
              custom={3.5}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <Pagination />
            </motion.div>
          </Suspense>
        </div>
      </ProductProvider>
    </ThemeProvider>
  )
}

export default App;