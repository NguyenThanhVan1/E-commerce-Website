import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <span className="text-pink-400">Bella Beauty Nhóm 5</span>
            </div>
            <p className="text-gray-400 mb-4">
              Mang đến vẻ đẹp tự nhiên và sự tự tin cho phụ nữ Việt với các sản
              phẩm mỹ phẩm cao cấp.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Chăm sóc khách hàng
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Nguyễn Huệ, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@bellabeauty.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bella Beauty Nhóm 5. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
