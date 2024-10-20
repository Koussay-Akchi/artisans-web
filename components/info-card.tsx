import React from "react";

interface ProductInfoModalProps {
  product: any | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{product.nom}</h2>
          <button className="text-red-500 font-bold" onClick={onClose}>
            X
          </button>
        </div>
        <p>{product.description}</p>
        <p><strong>Price:</strong> {product.prix} TND</p>
        <p><strong>Stock:</strong> {product.stock ? "In Stock" : "Out of Stock"}</p>
        <p><strong>Made by:</strong> {product.artisan}</p>
        <p><strong>Location:</strong> {product.ville}, {product.gouvernorat}</p>
        <p><strong>Phone:</strong> {product.phone}</p>
        <p><strong>Email:</strong> <a href={`mailto:${product.email}`} className="text-blue-500">{product.email}</a></p>
        <p><strong>Social:</strong> 
          <a href={`https://${product.facebook}`} target="_blank" rel="noreferrer" className="text-blue-500 ml-2">
            Facebook
          </a>
          <a href={`https://${product.instagram}`} target="_blank" rel="noreferrer" className="text-pink-500 ml-2">
            Instagram
          </a>
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductInfoModal;
