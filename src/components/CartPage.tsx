import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center min-h-screen">
        <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
        <h2 className="text-gray-900 mb-4">Giỏ hàng trống</h2>
        <p className="text-gray-600 mb-8">Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
        <Link
          to="/products"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-gray-900 mb-8">Giỏ hàng của bạn</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex gap-4"
              >
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </Link>

                {/* Product Info */}
                <div className="flex-grow">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-gray-900 mb-1 hover:text-pink-600 transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-2">{item.brand}</p>
                  <p className="text-pink-600">
                    {item.price.toLocaleString('vi-VN')}đ
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-gray-900">
                    {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-gray-900 mb-4">Tóm tắt đơn hàng</h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Tạm tính</span>
                  <span>{getCartTotal().toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Phí vận chuyển</span>
                  <span>
                    {getCartTotal() >= 500000 ? (
                      <span className="text-green-600">Miễn phí</span>
                    ) : (
                      '30.000đ'
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-900">Tổng cộng</span>
                <span className="text-pink-600">
                  {(getCartTotal() + (getCartTotal() >= 500000 ? 0 : 30000)).toLocaleString('vi-VN')}đ
                </span>
              </div>

              {getCartTotal() < 500000 && (
                <p className="text-gray-600 mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  Mua thêm{' '}
                  {(500000 - getCartTotal()).toLocaleString('vi-VN')}đ để được miễn phí vận chuyển
                </p>
              )}

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors mb-3"
              >
                Tiến hành thanh toán
              </button>

              <Link
                to="/products"
                className="block text-center text-pink-600 hover:underline"
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
