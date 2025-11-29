import React from "react";
import { Link } from "react-router-dom";
import { Star, Truck, Shield, HeadphonesIcon } from "lucide-react";
import { products } from "./products";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-pink-600 mb-4">
                Vẻ Đẹp Tự Nhiên, Tự Tin Rạng Ngời
              </h1>
              <p className="text-gray-700 mb-8">
                Khám phá bộ sưu tập mỹ phẩm cao cấp được tuyển chọn kỹ lưỡng từ
                các thương hiệu hàng đầu thế giới. Chúng tôi cam kết mang đến
                cho bạn những sản phẩm chất lượng nhất với giá cả hợp lý.
              </p>
              <Link
                to="/products"
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Mua sắm ngay
              </Link>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760621393386-3906922b0b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzdG9yZXxlbnwxfHx8fDE3NjQ0MTI4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beauty products"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mb-2">Giao hàng miễn phí</h3>
              <p className="text-gray-600">Cho đơn hàng từ 500.000đ</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mb-2">Hàng chính hãng 100%</h3>
              <p className="text-gray-600">Cam kết nguồn gốc rõ ràng</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mb-2">Hỗ trợ 24/7</h3>
              <p className="text-gray-600">Tư vấn nhiệt tình, chu đáo</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="mb-2">Đổi trả dễ dàng</h3>
              <p className="text-gray-600">Trong vòng 30 ngày</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-600">
              Khám phá các sản phẩm được yêu thích nhất
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{product.rating}</span>
                    </div>
                    <span className="text-gray-500">({product.reviews})</span>
                  </div>
                  <p className="text-pink-600">
                    {product.price.toLocaleString("vi-VN")}đ
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654973433534-1238e06f6b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBsdXh1cnl8ZW58MXx8fHwxNzY0Mzg1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About us"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Về Bella Beauty Nhóm 5</h2>
              <p className="text-gray-700 mb-4">
                Bella Beauty Nhóm 5 được thành lập với sứ mệnh mang đến cho phụ
                nữ Việt Nam những sản phẩm mỹ phẩm chất lượng cao, an toàn và
                phù hợp với làn da người Á Đông.
              </p>
              <p className="text-gray-700 mb-4">
                Chúng tôi tự hào là đại diện chính thức của nhiều thương hiệu mỹ
                phẩm nổi tiếng trên thế giới, đồng thời cam kết mang đến trải
                nghiệm mua sắm tuyệt vời nhất cho khách hàng.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-pink-600" />
                  <span>Hơn 10 năm kinh nghiệm trong ngành</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-pink-600" />
                  <span>Hơn 100,000 khách hàng tin tưởng</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-pink-600" />
                  <span>Sản phẩm chính hãng, có tem chống hàng giả</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-pink-100 to-purple-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-gray-900 mb-4">Đăng ký nhận thông tin</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Đăng ký để nhận những ưu đãi đặc biệt, thông tin sản phẩm mới và các
            mẹo làm đẹp hữu ích từ Bella Beauty Nhóm 5
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
