import React from 'react';
import '../../assets/styles/common/recommendCard.css'
interface RecommendCardProps {
    imageUrl: string;
    title: string;
    category: string;
    originalPrice: number;
    discountedPrice: number;
}

const RecommendCard: React.FC<RecommendCardProps> = ({ imageUrl, title, category, originalPrice, discountedPrice }) => {
    return (
        <div className="recommend-card">
            <img src={imageUrl} alt={title} />
            <div className="title">{title}</div>
            <div className="category">{category}</div>
            <div className="prices">
                <span className="original-price">${originalPrice}</span>
                <span className="discounted-price">${discountedPrice}</span>
            </div>
        </div>
    );
}

export default RecommendCard;