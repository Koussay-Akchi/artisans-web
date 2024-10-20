import React, { useState, useEffect } from "react";
import ProductCard from "./product-card"; 
import productService from "@/services/ProductService";
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedArtisan, setSelectedArtisan] = useState<string | null>(null);

  useEffect(() => {
    productService.getProductsList().then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  const handleViewProduct = (product: any) => {
    alert(`Viewing product: ${product.nom}`);
  };

  const handleFilterByArtisan = (artisanName: string) => {
    setSelectedArtisan(artisanName);
    setFilteredProducts(products.filter((product) => product.artisan === artisanName));
  };

  const handleResetFilter = () => {
    setSelectedArtisan(null);
    setFilteredProducts(products);
  };

  return (
    <div className="relative">
      {selectedArtisan && (
        <div className="absolute top-0 left-0 p-2 bg-gray-300 text-black rounded-lg">
          Artisan name: {selectedArtisan} 
          <button className="ml-2 text-red-500" onClick={handleResetFilter}>
            (Reset)
          </button>
        </div>
      )}
      <div className="bg-pink-500 flex overflow-x-scroll p-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={handleViewProduct}
            onFilterByArtisan={handleFilterByArtisan}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
