import React from 'react';
interface RecommendCardProps {
    imageUrl: string;
    title: string;
    category: string;
    originalPrice: number;
    discountedPrice: number;
}

const RecommendCard: React.FC<RecommendCardProps> = ({ imageUrl, title, category, originalPrice, discountedPrice }) => {
    return (
        <div className="border border-gray-300 rounded-lg w-183 h-324">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
            <div className="mt-10 text-center text-gray-900 font-bold text-xl leading-6 tracking-wider">{title}</div>
            <div className="mt-2.5 text-center text-gray-600 font-bold text-base leading-6 tracking-wide">{category}</div>
            <div className="mt-2.5 text-center">
                <span className="text-gray-400 font-bold text-xl leading-6 tracking-wider mr-1.5">${originalPrice}</span>
                <span className="text-secondary-1 font-bold text-xl leading-6 tracking-wider">${discountedPrice}</span>
            </div>
        </div>
    );
}

export default RecommendCard;
