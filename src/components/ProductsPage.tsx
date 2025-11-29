import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal } from 'lucide-react';
import { products } from './products';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['Tất cả', 'Chăm sóc da', 'Trang điểm', 'Nước hoa'];

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'Tất cả') return true;
    return product.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Sản phẩm của chúng tôi</h1>
          <p className="text-gray-600">Khám phá bộ sưu tập mỹ phẩm cao cấp</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Danh mục:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="featured">Nổi bật</option>
                <option value="price-asc">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao đến thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
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
                <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full mb-2">
                  {product.category}
                </span>
                <p className="text-gray-500 mb-1">{product.brand}</p>
                <h3 className="text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({product.reviews})</span>
                </div>
                <p className="text-pink-600">
                  {product.price.toLocaleString('vi-VN')}đ
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* No products found */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600">Không tìm thấy sản phẩm nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
