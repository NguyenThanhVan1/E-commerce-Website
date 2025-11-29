import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from './products';
import { useCart } from './CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-gray-900 mb-4">Không tìm thấy sản phẩm</h2>
        <Link to="/products" className="text-pink-600 hover:underline">
          Quay lại trang sản phẩm
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-gray-600">
          <Link to="/" className="hover:text-pink-600">Trang chủ</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-pink-600">Sản phẩm</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.brand}</p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} đánh giá)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-pink-600 mb-2">
                  {product.price.toLocaleString('vi-VN')}đ
                </p>
                <p className="text-gray-600">Đã bao gồm VAT</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-gray-900 mb-2">Mô tả sản phẩm</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-gray-900 mb-2">Số lượng</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-100 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-200 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedToCart ? 'Đã thêm vào giỏ!' : 'Thêm vào giỏ'}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Mua ngay
                </button>
                <button className="border border-gray-300 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-gray-700">
                  <Truck className="w-5 h-5 text-pink-600" />
                  <span>Miễn phí vận chuyển cho đơn từ 500.000đ</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-pink-600" />
                  <span>Cam kết hàng chính hãng 100%</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <RotateCcw className="w-5 h-5 text-pink-600" />
                  <span>Đổi trả trong vòng 30 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-gray-900 mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 mb-1">{relatedProduct.brand}</p>
                    <h3 className="text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{relatedProduct.rating}</span>
                    </div>
                    <p className="text-pink-600">
                      {relatedProduct.price.toLocaleString('vi-VN')}đ
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
