import React from 'react';
interface ProductCardProps {
    imageUrl: string;
    title: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
    rating: number;
    location: string;
    soldCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, originalPrice, discountedPrice, discountPercentage, rating, location, soldCount }) => {
    return (
        <div className="border rounded-lg w-203 h-352">
            <img src={imageUrl} alt={title} className="w-full rounded-md" />
            
            <h2 className="text-sm ml-2 mt-10 text-gray-900 font-semibold mb-2 truncate">{title}</h2>
            <div className="text-2xl mb-3 flex justify-center items-center">
                <span className="text-gray-500 line-through mr-2">${originalPrice}</span>
                <span className="text-red-600 font-bold">${discountedPrice}</span>
            </div>
            <div className="text-orange-500 font-bold text-lg text-center mb-2">
                {discountPercentage}%
            </div>
            <div className="text-md font-medium mb-1 text-center">{location}</div>
            <div className="text-center text-yellow-500">
                <span className="mr-1">⭐ {rating}</span> | Sold {soldCount}+
            </div>
        </div>
        // <div className="border border-gray-300 rounded-lg w-183 h-324">
        //     <img src={imageUrl} alt={title} className="w-full h-auto" />
        //     <div className="mt-10 text-center text-gray-900 font-bold text-xl leading-6 tracking-wider">{title}</div>
        //     <div className="mt-2.5 text-center text-gray-600 font-bold text-base leading-6 tracking-wide">{category}</div>
        //     <div className="mt-2.5 text-center">
        //         <span className="text-gray-400 font-bold text-xl leading-6 tracking-wider mr-1.5">${originalPrice}</span>
        //         <span className="text-secondary-1 font-bold text-xl leading-6 tracking-wider">${discountedPrice}</span>
        //     </div>
        // </div>
    );
}

export default ProductCard;
