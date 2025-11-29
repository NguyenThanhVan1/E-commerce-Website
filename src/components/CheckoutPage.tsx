import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, Building2, CheckCircle } from 'lucide-react';
import { useCart } from './CartContext';

const CheckoutPage: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    paymentMethod: 'credit-card',
    note: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-16 text-center min-h-screen">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
        <h1 className="text-gray-900 mb-4">Đặt hàng thành công!</h1>
        <p className="text-gray-600 mb-4">
          Cảm ơn bạn đã mua hàng tại Bella Beauty
        </p>
        <p className="text-gray-600 mb-8">
          Chúng tôi sẽ liên hệ với bạn sớm để xác nhận đơn hàng
        </p>
        <div className="inline-flex items-center gap-2 text-pink-600">
          <span>Đang chuyển về trang chủ...</span>
        </div>
      </div>
    );
  }

  const shippingCost = getCartTotal() >= 500000 ? 0 : 30000;
  const total = getCartTotal() + shippingCost;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-gray-900 mb-8">Thanh toán</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-gray-900 mb-4">Thông tin liên hệ</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="0123456789"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-gray-900 mb-4">Địa chỉ giao hàng</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Địa chỉ cụ thể <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Số nhà, tên đường"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Tỉnh/Thành phố <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        <option value="hcm">TP. Hồ Chí Minh</option>
                        <option value="hanoi">Hà Nội</option>
                        <option value="danang">Đà Nẵng</option>
                        <option value="cantho">Cần Thơ</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Quận/Huyện <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Quận/Huyện"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Ghi chú</label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Ghi chú thêm cho đơn hàng (tùy chọn)"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-gray-900 mb-4">Phương thức thanh toán</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-pink-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Thẻ tín dụng/ghi nợ</p>
                      <p className="text-gray-500">Visa, Mastercard, JCB</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-pink-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="e-wallet"
                      checked={formData.paymentMethod === 'e-wallet'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <Wallet className="w-6 h-6 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Ví điện tử</p>
                      <p className="text-gray-500">MoMo, ZaloPay, VNPay</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-pink-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={formData.paymentMethod === 'bank-transfer'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <Building2 className="w-6 h-6 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Chuyển khoản ngân hàng</p>
                      <p className="text-gray-500">Chuyển khoản qua ngân hàng</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-pink-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Thanh toán khi nhận hàng (COD)</p>
                      <p className="text-gray-500">Thanh toán bằng tiền mặt khi nhận hàng</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-gray-900 mb-4">Đơn hàng của bạn</h2>

                {/* Cart Items */}
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-900 line-clamp-1">{item.name}</p>
                        <p className="text-gray-600">
                          {item.quantity} x {item.price.toLocaleString('vi-VN')}đ
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Summary */}
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Tạm tính</span>
                    <span>{getCartTotal().toLocaleString('vi-VN')}đ</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Phí vận chuyển</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Miễn phí</span>
                      ) : (
                        `${shippingCost.toLocaleString('vi-VN')}đ`
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-gray-900">Tổng cộng</span>
                  <span className="text-pink-600">
                    {total.toLocaleString('vi-VN')}đ
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Đặt hàng
                </button>

                <p className="text-gray-600 mt-4">
                  Bằng việc đặt hàng, bạn đồng ý với{' '}
                  <a href="#" className="text-pink-600 hover:underline">
                    Điều khoản dịch vụ
                  </a>{' '}
                  của chúng tôi
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
