import React from "react";
import WomanIcon from "@mui/icons-material/Woman";

interface ProductCardProps {
  product: any;
  onView: (product: any) => void;
  onFilterByArtisan: (artisanName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onView,
  onFilterByArtisan,
}) => {
  return (
    <div className="min-w-64 bg-white shadow-md p-4 rounded-lg m-2">
      <h3 className="text-lg font-bold">{product.nom}</h3>
      <p>{product.description}</p>
      <p className="font-semibold">{product.prix} TND</p>
      <p>
        {product.ville}, {product.gouvernorat}
      </p>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={() => onView(product)}
        >
          View
        </button>
        <div className="flex items-center">
          <button
            className=""
            onClick={() => onFilterByArtisan(product.artisan)}
          >
            <WomanIcon />
            
          <span>{product.artisan}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
