import React from 'react';

interface ProductCardProps {
    imageUrl: string;
    title: string;
    originalPrice: string;
    discountedPrice: string;
    discountPercentage: number;
    rating: number;
    location: string;
    soldCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, originalPrice, discountedPrice, discountPercentage, rating, location, soldCount }) => {
    return (
        <div className="border rounded-lg w-203 h-352">
            <img src={imageUrl} alt={title} className="w-full rounded-md" />

            <h2 className="text-sm ml-2 mt-10 font-medium text-gray-900 font-medium mb-2">{title}</h2>
            <div className="font-bold text-base ml-2 ">${discountedPrice}</div>
            <div className="text-2xl flex ml-2 items-center">
                <span className="text-red-400 px-0.5 py-0.5 bg-red-100 text-xs mr-1">${discountPercentage}%</span>
                <span className="text-zinc-400 line-through font-normal text-11">${originalPrice}</span>
            </div>
            <div className="ml-2 flex items-center">
                <span className='mr-0.5'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14w h-24w">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg> </span>
                <span className='text-xs font-normal text-zinc-400'>{location}</span>
            </div>
            <div className="ml-2 flex items-center">
                <span className='mr-0.5'><svg xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#facc15" className="w-14w h-24w">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg></span>

                <span className='text-xs font-normal text-zinc-400'>{rating} | Sold {soldCount}+</span>
            </div>
        </div>
    );
}

export default ProductCard;
